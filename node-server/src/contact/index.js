const { Router } = require('express');
const { add, get, removeContact, updateContact } = require('./controller/contact');
const router = Router();

router.post('/add_contact', add);
router.get('/get_contact', get);
router.post('/remove_contact', removeContact);
router.post('/update_contact', updateContact);

module.exports = router;