const Contact = require('../../model/contact');

async function addContact(body) {
  const {
    name,
    phone_number,
    relationship_status,
    email,
    location,
    user,
  } = body;

  const contact = new Contact({
    name,
    phone_number,
    relationship_status,
    email,
    location,
    user,
  });

  return await contact.save();
}

async function getContacts() {
    return await Contact.find().populate('users');
}

module.exports = {
  addContact,
  getContacts,
}  