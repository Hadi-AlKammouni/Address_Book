const { Router } = require('express');
// const { register, login, welcome } = require('./controller/user');
const { get, register, login, welcome } = require('./controller/user');

const router = Router();
// const verifyToken = require('../../middleware/auth');
const userMiddleware = require("../../middleware/auth");
router.get("/", userMiddleware(), (req, res) => welcome(req, res));

router.post('/register', register);
router.post('/login', login);
router.get('/get_users', get);
// router.post('/welcome', verifyToken(), (req, res) => welcome (req, res));

module.exports = router;