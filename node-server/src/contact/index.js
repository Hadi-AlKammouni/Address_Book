const { Router } = require('express');
const { add, get, removeContact } = require('./controller/contact');
const router = Router();

router.post('/add_contact', add);
router.get('/get_contact', get);
router.post('/remove_contact', removeContact);

module.exports = router;