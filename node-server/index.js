require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const port = 3000;

const app = express();
app.use(express.json()); 
app.use(cors());

app.get("/", (req, res) => {
    res.json({message: "Helloo"})
})

app.listen(
    port,
    () => console.log(`Listening on port ${port}`)
);