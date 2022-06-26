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
    return await Contact.find();
}

async function getContactsByUserId(user_id) {
  return await Contact.find({ user: user_id });
}

async function getSpecificContact(contact_id) {
  return await Contact.findById(contact_id);
}

module.exports = {
  addContact,
  getContacts,
  getContactsByUserId,
  getSpecificContact,
}  