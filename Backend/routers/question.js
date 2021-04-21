const express = require("express");
const question = express();
question.use(express.json());

question.get("/", (req, res) => {
  res.send("this is the question");
});

module.exports = question;
