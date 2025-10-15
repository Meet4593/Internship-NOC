const Noc = require('../models/Noc');
const Submission = require('../models/Submission');
const { generateNocPdf } = require('../utils/pdf');
const { serveFile } = require('../utils/storage');
const { notifyUser } = require('../utils/notify');

exports.generateForSubmission = async (req, res) => {
	try {
		const submission = await Submission.findById(req.params.id).populate('student');
		if (!submission) return res.status(404).json({ message: 'Submission not found' });
		if (submission.status !== 'hod_approved') return res.status(400).json({ message: 'Not approved by HOD' });
		const existing = await Noc.findOne({ submission: submission._id });
		if (existing) return res.json(existing);
		const { key, url } = await generateNocPdf({
			studentName: submission.student.name,
			companyName: submission.companyName,
			position: submission.position,
			startDate: submission.startDate,
			endDate: submission.endDate,
			submissionId: submission._id.toString(),
		});
		const noc = await Noc.create({ submission: submission._id, student: submission.student._id, fileUrl: url });
		await notifyUser(submission.student._id, 'Your NOC has been generated and is ready to download.');
		return res.status(201).json(noc);
	} catch (err) {
		return res.status(500).json({ message: 'Failed to generate NOC' });
	}
};

exports.downloadNoc = async (req, res) => {
	try {
		const noc = await Noc.findById(req.params.id);
		if (!noc) return res.status(404).json({ message: 'NOC not found' });
		serveFile(req, res, noc.fileUrl);
	} catch (err) {
		return res.status(500).json({ message: 'Failed to download NOC' });
	}
};

