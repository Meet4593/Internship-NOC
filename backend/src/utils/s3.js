const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

AWS.config.update({ region: process.env.AWS_REGION });
const s3 = new AWS.S3();

const upload = multer({
	storage: multerS3({
		s3,
		bucket: process.env.AWS_S3_BUCKET,
		acl: 'private',
		contentType: multerS3.AUTO_CONTENT_TYPE,
		key: (_req, file, cb) => {
			const timestamp = Date.now();
			cb(null, `uploads/${timestamp}-${file.originalname}`);
		},
	}),
});

module.exports = { s3, upload };

