const router = require('express').Router();
const { authenticate, authorize } = require('../middleware/auth');
const { ROLES } = require('../config/roles');
const ctrl = require('../controllers/submission.controller');
const { upload } = require('../utils/s3');

// Student creates submission with letter upload
router.post('/', authenticate, authorize(ROLES.STUDENT), upload.single('letter'), ctrl.createSubmission);

// Student views their submissions
router.get('/me', authenticate, authorize(ROLES.STUDENT), ctrl.getMySubmissions);

// Faculty lists and reviews
router.get('/pending/faculty', authenticate, authorize(ROLES.FACULTY), ctrl.listForFaculty);
router.post('/:id/review/faculty', authenticate, authorize(ROLES.FACULTY), ctrl.reviewByFaculty);

// HOD lists and reviews
router.get('/pending/hod', authenticate, authorize(ROLES.HOD), ctrl.listForHod);
router.post('/:id/review/hod', authenticate, authorize(ROLES.HOD), ctrl.reviewByHod);

module.exports = router;

