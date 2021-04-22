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
  const typeNumber = Math.floor(Math.random() * 2) + 1;
  const tableToCommunicate = "QuestionType" + typeNumber;
  const questionData = await models[tableToCommunicate].findOne({
    order: [sequelize.random()],
  });
  let { question, field, table, operator } = questionData.toJSON();
  const isGeneral = table === "CountriesGeneral";
  let answers = [];
  let query = {
    include: [
      {
        model: models[table],
        required: true,
      },
    ],
    order: [sequelize.random()],
    limit: 4,
  };
  isGeneral && delete query.include;
  let countries = await models.CountryGeneral.findAll(query);

  if (!isGeneral)
    answers = await Promise.all(
      countries.map(async (country) => country["get" + table]())
    );
  else answers = countries;

  let filteredAnswers = answers.map((value) => {
    return { country: value.country, field: value[field] };
  });
  filteredAnswers = filteredAnswers.sort((a, b) =>
    operator ? b.field - a.field : a.field - b.field
  );
  filteredAnswers.forEach((value, index) =>
    index === 0 ? (value.right = true) : (value.right = false)
  );
  if (typeNumber === 2)
    question = question.replace("XXX", filteredAnswers[0].country);

  res.send({ question: question, answers: filteredAnswers });
});

question.get("/generate3", async (req, res) => {
  const typeNumber = 3;
  const tableToCommunicate = "QuestionType" + typeNumber;
  const questionData = await models[tableToCommunicate].findOne({
    order: [sequelize.random()],
  });
  let { question, field, table, operator } = questionData.toJSON();
  const isGeneral = table === "CountriesGeneral";
  let answers = [];
  let query = {
    include: [
      {
        model: models[table],
        required: true,
      },
    ],
    order: [sequelize.random()],
    limit: 2,
  };
  isGeneral && delete query.include;
  let countries = await models.CountryGeneral.findAll(query);

  if (!isGeneral)
    answers = await Promise.all(
      countries.map(async (country) => country["get" + table]())
    );
  else answers = countries;

  let filteredAnswers = answers.map((value) => {
    return { country: value.country, field: value[field] };
  });
  filteredAnswers = filteredAnswers.sort((a, b) =>
    operator ? b.field - a.field : a.field - b.field
  );
  filteredAnswers.forEach((value, index) =>
    index === 0 ? (value.right = true) : (value.right = false)
  );

  res.send({ question: question, answers: filteredAnswers });
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
