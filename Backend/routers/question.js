const models = require("../models");
const express = require("express");
const question = express();
question.use(express.json());

question.get("/generate", (req, res) => {
  res.send("this is the question");
});

question.post("/save", (req, res) => {
  const { body } = req.body;
  models.SavedQuestion.findOne({}).then((data) => console.log(data));
});

question.put("/rank?id&rank", (req, res) => {
  const { id } = req.query;
  const { rank } = req.query;
  models.SavedQuestion.find({}).then((data) => console.log(data));
});
module.exports = question;
