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

question.get("/generate1", async (req, res) => {
  // const typeNumber = Math.floor(Math.random() * 3) + 1;
  const typeNumber = 1;
  const tableToCommunicate = "QuestionType" + typeNumber;
  const questionData = await models[tableToCommunicate].findOne({});
  const field = questionData.toJSON().field;
  let dataToSend = { question: questionData.toJSON().question };
  console.log(field);
  switch (typeNumber) {
    case 1:
      const { operator } = questionData.toJSON();
      dataToSend.answers = await sequelize.query(
        "WITH answers AS (SELECT country, " +
          field +
          " FROM population_densities ORDER BY RAND () LIMIT 4 ) SELECT * from answers ORDER BY population " +
          (operator ? "DESC" : "ASC"),
        {
          type: sequelize.QueryTypes.SELECT,
        }
      );
      dataToSend.answers.forEach((value, index) =>
        index === 0 ? (value.right = true) : (value.right = false)
      );

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
  res.send(dataToSend);
});

question.get("/generate2", async (req, res) => {
  const typeNumber = 1;
  const tableToCommunicate = "QuestionType" + typeNumber;
  const questionData = await models[tableToCommunicate].findOne({});
  const { question, field, table, operator } = questionData.toJSON();
  let countries = await models.CountryGeneral.findAll({
    include: [
      {
        model: models.PopulationDensity,
        where: {
          population: { [Op.ne]: null },
        },
        required: true,
      },
    ],
    order: [sequelize.random()],
    limit: 4,
  });

  let answers = await Promise.all(
    countries.map(async (country) => country.getPopulationDensity())
  );
  let filteredAnswers = answers.map((value) => {
    return { country: value.country, field: value[field] };
  });
  filteredAnswers = filteredAnswers.sort((a, b) =>
    operator ? a.population - b.population : b.population - a.population
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
