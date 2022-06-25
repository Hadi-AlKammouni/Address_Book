const Contact = require('../../model/contact');

async function addContact(body) {
  const {
    name,
    phone_number,
    relationship_status,
    email,
    location,
  } = body;

  const contact = new Contact({
    name,
    phone_number,
    relationship_status,
    email,
    location,
  });

  return await contact.save();
}

module.exports = {
  addContact,
}  