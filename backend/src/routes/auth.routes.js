const router = require('express').Router();
const { register, login, simpleLogin } = require('../controllers/auth.controller');

router.post('/register', register);
router.post('/login', login);
router.post('/simple-login', simpleLogin); // Demo login endpoint

module.exports = router;

