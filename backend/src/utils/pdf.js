const PDFDocument = require('pdfkit');
const { s3 } = require('./s3');

async function generateNocPdf({ studentName, companyName, position, startDate, endDate, submissionId }) {
	return new Promise((resolve, reject) => {
		const doc = new PDFDocument({ size: 'A4', margin: 50 });
		const key = `noc/noc-${submissionId}.pdf`;
		const upload = s3.upload({
			Bucket: process.env.AWS_S3_BUCKET,
			Key: key,
			ACL: 'private',
			ContentType: 'application/pdf',
			Body: undefined, // will be stream
		});

		const passThrough = upload.createReadStream ? upload.createReadStream() : null;
		// Fallback: use managed upload with streams
		const stream = doc.pipe(s3.upload({
			Bucket: process.env.AWS_S3_BUCKET,
			Key: key,
			ACL: 'private',
			ContentType: 'application/pdf',
		}).createWriteStream());

		doc.fontSize(18).text('No Objection Certificate', { align: 'center' });
		doc.moveDown();
		doc.fontSize(12).text(`Date: ${new Date().toLocaleDateString()}`);
		doc.moveDown();
		doc.text(`This is to certify that ${studentName} is permitted by the institute to undertake an internship at ${companyName} as ${position} from ${new Date(startDate).toLocaleDateString()} to ${new Date(endDate).toLocaleDateString()}.`);
		doc.moveDown();
		doc.text('We have no objection to the above internship and wish them success.');
		doc.moveDown(2);
		doc.text('Authorized Signatory');
		doc.text('Institute Name');

		doc.end();

		stream.on('close', () => {
			const url = `s3://${process.env.AWS_S3_BUCKET}/${key}`; // private URL; use signed URLs for download
			resolve({ key, url });
		});
		stream.on('error', reject);
	});
}

module.exports = { generateNocPdf };

