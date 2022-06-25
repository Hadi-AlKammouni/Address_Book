const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {type: String, required: true},
  phone_number: {type: String, required: true},
  relationship_status: {type: String, required: true},
  email: {type: String, required: true},
  location: {type: String, required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
});

module.exports = mongoose.model('contact', contactSchema);