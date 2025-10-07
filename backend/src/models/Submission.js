const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema(
	{
		student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		companyName: { type: String, required: true },
		companyAddress: { type: String, required: true },
		position: { type: String, required: true },
		startDate: { type: Date, required: true },
		endDate: { type: Date, required: true },
		letterUrl: { type: String, required: true }, // S3 URL or path
		status: {
			type: String,
			enum: ['submitted', 'faculty_approved', 'faculty_rejected', 'hod_approved', 'hod_rejected'],
			default: 'submitted',
		},
		remarks: { type: String },
		facultyReviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		hodReviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Submission', submissionSchema);

