const { Router } = require('express');
// const { register, login, welcome } = require('./controller/user');
const { register, login } = require('./controller/user');

const router = Router();
// const verifyToken = require('../../middleware/auth');

router.post('/register', register);
router.post('/login', login);
// router.post('/welcome', verifyToken(), (req, res) => welcome (req, res));

module.exports = router;