const { addContact } = require('../service');
const Contact = require("../../../model/contact");

async function add(req, res) {
  try {
  
    const newContact = await addContact(req.body);
    // console.log('newContact =>', newContact);

    return res.status(200).send(newContact);
  } 
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  add,
};