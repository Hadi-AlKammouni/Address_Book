const { Router } = require('express');
const { add, get, removeContact, updateContact, getContact, getContactByID } = require('./controller/contact');
const router = Router();

router.post('/add_contact', add);
router.get('/get_contact', get);
router.post('/remove_contact', removeContact);
router.post('/update_contact', updateContact);
router.post('/get_contact_by_his_userID', getContact);
router.post('/get_contact_by_ID', getContactByID);

module.exports = router;