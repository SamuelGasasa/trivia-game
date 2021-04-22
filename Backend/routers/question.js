const models = require("../models");
const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const express = require("express");
const { QueryTypes } = require("sequelize");
const question = express();
require("dotenv").config();
question.use(express.json());

const sequelize = new Sequelize(
  process.env.database,
  "root",
  process.env.password,
  {
    host: "127.0.0.1",
    dialect: "mysql",
  }
);

question.get("/generate", async (req, res) => {
  // const typeNumber = Math.floor(Math.random() * 3) + 1;
  const typeNumber = 1;
  const tableToCommunicate = "QuestionType" + typeNumber;
  const questionData = await models[tableToCommunicate].findOne({});
  const field = questionData.toJSON().field;
  console.log(field);
  switch (typeNumber) {
    case 1:
      sequelize
        .query("SELECT population FROM `example` LIMIT 4", {
          type: sequelize.QueryTypes.SELECT,
        })
        .then((res) => console.log(res));
      // const questions = await sequelize.query(
      //   "SELECT population FROM example LIMIT 4",
      //   { type: QueryTypes.SELECT },
      // );
      // console.log(questions);
      // const possibleAnswers = await models.CountryGeneral.findAll({
      //   where: field,
      //   limit: 4,
      // });
      // console.log(possibleAnswers);
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

question.get("/test", (req, res) => {
  // models.CountryGeneral.findOne().then(async (country) => {
  //   const population = await country.getPopulationDensity();
  //   res.send(population);
  // });
  models.PopulationDensity.findOne({
    where: { country: "Afghanistan" },
  }).then(async (country) => {
    const general = await country.getCountryGeneral();
    res.send(general);
  });
});
module.exports = question;
