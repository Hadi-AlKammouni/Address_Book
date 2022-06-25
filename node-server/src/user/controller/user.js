const { getUsers } = require('../service');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const auth = require("../../../middleware/auth");

// Logic goes here

// importing user context
const User = require("../../../model/user");

async function get(req, res) {
  try {
    // console.log(req.query);

    const result = await getUsers();
    console.log('result =>', result);

    return res.send(result);
  } catch (error) {
    console.log(error);
  }
}

// Register
async function register (req, res) {

    // Our register logic starts here
    try {
      // Get user input
      const { name, email, password } = req.body;
  
      // Validate user input
      if (!(email && password && name)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
        // return "hey!";
        // return res.status().json();
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  // Our register logic ends here
};

// Login
async function login (req, res) {

    // Our login logic starts here
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }

      email.toLowerCase()
      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
    // Our login logic ends here
};

// //Authenticating the user
// async function welcome (req, res) {
//     res.status(200).send("Welcome 🙌 ");
// };

module.exports = {
    // welcome,
    get,
    register,
    login,
};