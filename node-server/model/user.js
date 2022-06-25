const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  contacts:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'contact'
  },],
});

module.exports = mongoose.model("user", userSchema);