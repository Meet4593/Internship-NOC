const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

async function generateNocPdf({ studentName, companyName, position, startDate, endDate, submissionId }) {
	return new Promise((resolve, reject) => {
		const doc = new PDFDocument({ size: 'A4', margin: 50 });
		const fileName = `noc-${submissionId}.pdf`;
		const filePath = path.join(__dirname, '../../uploads', fileName);
		
		// Ensure uploads directory exists
		const uploadsDir = path.dirname(filePath);
		if (!fs.existsSync(uploadsDir)) {
			fs.mkdirSync(uploadsDir, { recursive: true });
		}

		const stream = fs.createWriteStream(filePath);

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

		doc.pipe(stream);

		stream.on('close', () => {
			const url = `/uploads/${fileName}`;
			resolve({ key: fileName, url });
		});
		stream.on('error', reject);
		doc.end();
	});
}

module.exports = { generateNocPdf };

