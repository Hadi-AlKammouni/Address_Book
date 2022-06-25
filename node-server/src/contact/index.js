const { Router } = require('express');
const { add, get } = require('./controller/contact');
const router = Router();

router.post('/add_contact', add);
router.get('/get_contact', get);

module.exports = router;