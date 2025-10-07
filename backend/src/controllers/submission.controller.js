const Submission = require('../models/Submission');
const { ROLES } = require('../config/roles');
const { notifyUser } = require('../utils/notify');

exports.createSubmission = async (req, res) => {
	try {
		const { companyName, companyAddress, position, startDate, endDate } = req.body;
		if (!req.file || !req.file.location) return res.status(400).json({ message: 'Upload missing' });
		const submission = await Submission.create({
			student: req.user.id,
			companyName,
			companyAddress,
			position,
			startDate,
			endDate,
			letterUrl: req.file.location,
		});
		// Notify student about successful submission
		await notifyUser(req.user.id, 'Your internship company profile letter was submitted.');
		return res.status(201).json(submission);
	} catch (err) {
		return res.status(500).json({ message: 'Failed to submit' });
	}
};

exports.getMySubmissions = async (req, res) => {
	const list = await Submission.find({ student: req.user.id }).sort({ createdAt: -1 });
	return res.json(list);
};

exports.reviewByFaculty = async (req, res) => {
	try {
		const { decision, remarks } = req.body; // decision: approve|reject
		const submission = await Submission.findById(req.params.id);
		if (!submission) return res.status(404).json({ message: 'Not found' });
		if (decision === 'approve') {
			submission.status = 'faculty_approved';
			submission.facultyReviewer = req.user.id;
		} else {
			submission.status = 'faculty_rejected';
			submission.facultyReviewer = req.user.id;
		}
		submission.remarks = remarks;
		await submission.save();
		// Notify student about faculty decision
		await notifyUser(submission.student, `Faculty ${decision === 'approve' ? 'approved' : 'rejected'} your submission.`);
		return res.json(submission);
	} catch (err) {
		return res.status(500).json({ message: 'Review failed' });
	}
};

exports.reviewByHod = async (req, res) => {
	try {
		const { decision, remarks } = req.body; // decision: approve|reject
		const submission = await Submission.findById(req.params.id);
		if (!submission) return res.status(404).json({ message: 'Not found' });
		if (submission.status !== 'faculty_approved') return res.status(400).json({ message: 'Not ready for HOD' });
		if (decision === 'approve') {
			submission.status = 'hod_approved';
			submission.hodReviewer = req.user.id;
		} else {
			submission.status = 'hod_rejected';
			submission.hodReviewer = req.user.id;
		}
		submission.remarks = remarks;
		await submission.save();
		// Notify student about HOD decision
		await notifyUser(submission.student, `HOD ${decision === 'approve' ? 'approved' : 'rejected'} your submission.`);
		return res.json(submission);
	} catch (err) {
		return res.status(500).json({ message: 'Review failed' });
	}
};

exports.listForFaculty = async (_req, res) => {
	const list = await Submission.find({ status: 'submitted' }).sort({ createdAt: -1 });
	return res.json(list);
};

exports.listForHod = async (_req, res) => {
	const list = await Submission.find({ status: 'faculty_approved' }).sort({ createdAt: -1 });
	return res.json(list);
};

