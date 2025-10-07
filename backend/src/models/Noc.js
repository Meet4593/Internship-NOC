const mongoose = require('mongoose');

const nocSchema = new mongoose.Schema(
	{
		submission: { type: mongoose.Schema.Types.ObjectId, ref: 'Submission', required: true, unique: true },
		student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		fileUrl: { type: String, required: true }, // S3 URL or path to generated PDF
		issuedAt: { type: Date, default: Date.now },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Noc', nocSchema);

