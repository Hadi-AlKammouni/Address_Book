const User = require('../../model/user');

//Funtion called to get all users from db
async function getUsers() {
    return await User.find();
    // return await Task.find().populate('user');
};

//Funtion called to get an users according to the id from db
async function getById(id) {
    return await User.findById(id);
}

//Funtion called to get an users according to the email from db
async function getByEmail(email) {
    var query = { "email": email };
    return await User.find(query);
}

module.exports = {
    getUsers,
    getById,
    getByEmail,
}
