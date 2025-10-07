const router = require('express').Router();
const { authenticate, authorize } = require('../middleware/auth');
const { ROLES } = require('../config/roles');
const ctrl = require('../controllers/noc.controller');

// Generate NOC after HOD approval
router.post('/:id/generate', authenticate, authorize(ROLES.HOD), ctrl.generateForSubmission);

// Student downloads NOC
router.get('/download/:id', authenticate, authorize(ROLES.STUDENT, ROLES.FACULTY, ROLES.HOD), ctrl.getSignedDownloadUrl);

module.exports = router;

