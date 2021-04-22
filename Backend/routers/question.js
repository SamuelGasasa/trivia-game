const models = require("../models");
const { Op } = require("sequelize");
const sequelize = require("Sequelize");
const express = require("express");
const question = express();
question.use(express.json());

question.get("/generate", async (req, res) => {
  // const typeNumber = Math.floor(Math.random() * 3) + 1;
  const typeNumber = 1;
  const tableToCommunicate = "QuestionType" + typeNumber;
  const questionData = await models[tableToCommunicate].findOne({});
  const field = questionData.toJSON().field;
  console.log(field);
  switch (typeNumber) {
    case 1:
      const possibleAnswers = await models.CountryGeneral.findAll({
        where: field,
        limit: 4,
      });
      console.log(possibleAnswers);
      break;

    default:
      break;
  }
  const questionToSend = {
    question: questionData.toJSON().question,
  };
  res.send(questionToSend);
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
