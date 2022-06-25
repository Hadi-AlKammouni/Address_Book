require("dotenv").config();
require("./config/database").connect();

const http = require("http");
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

const express = require("express");
const app = express();
const server = http.createServer(app);
const userRouter = require('./src/user');
const contactRouter = require('./src/contact');

app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/contact', contactRouter);

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;