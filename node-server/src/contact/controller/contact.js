const { addContact, getContacts } = require('../service');
const Contact = require("../../../model/contact");
const User = require("../../../model/user");

async function add(req, res) {
  try {
  
    const newContact = await addContact(req.body);
    // console.log('newContact =>', newContact);

    // use updateOne() 
    const updateUser = await User.updateOne(
      {
        _id: newContact.user
      },
      {
        $push: {
          contacts: newContact._id
        }
      }
    );

    return res.status(200).send(newContact);
  } 
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function get(req, res) {
  try {
    console.log(req.query);

    const result = await getContacts();
    console.log('result =>', result);

    return res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(req, res) {
  try {
    const contact = await Contact.findOne({ _id: req.query.id });
    if (!contact) console.log(404);

    const deleteResult = await contact.remove();

    await User.updateOne(
      { _id: contact.user },
      { $pull: { contacts: contact._id } }
    );

    return res.send("Contact removed successfully");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  add,
  get,
  removeContact,
};