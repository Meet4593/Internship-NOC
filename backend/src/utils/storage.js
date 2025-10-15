const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadsDir)) {
	fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for local storage
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadsDir);
	},
	filename: (req, file, cb) => {
		const timestamp = Date.now();
		const ext = path.extname(file.originalname);
		cb(null, `uploads/${timestamp}-${file.originalname}`);
	}
});

const upload = multer({ 
	storage: storage,
	limits: {
		fileSize: 10 * 1024 * 1024 // 10MB limit
	}
});

// Helper function to get file URL
const getFileUrl = (filename) => {
	return `/uploads/${path.basename(filename)}`;
};

// Helper function to serve files
const serveFile = (req, res, filePath) => {
	const fullPath = path.join(uploadsDir, path.basename(filePath));
	if (fs.existsSync(fullPath)) {
		res.sendFile(fullPath);
	} else {
		res.status(404).json({ message: 'File not found' });
	}
};

module.exports = { 
	upload, 
	getFileUrl, 
	serveFile 
};
