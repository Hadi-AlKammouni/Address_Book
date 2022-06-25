const User = require('../../model/user');

async function getUsers() {
    return await User.find();
    // return await Task.find().populate('user');
};

module.exports = {
    getUsers,
}
