const User = require('../../model/user');

async function getUsers() {
    return await User.find();
    // return await Task.find().populate('user');
};

async function getById(id) {
    return await User.findById(id);
  }

module.exports = {
    getUsers,
    getById,
}
