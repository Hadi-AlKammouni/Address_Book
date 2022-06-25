const { Router } = require('express');
const { add } = require('./controller/contact');
const router = Router();

router.post('/add_contact', add);

module.exports = router;