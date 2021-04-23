const models = require("../models");
const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const express = require("express");
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

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

question.get("/generate", async (req, res) => {
  const typeNumber = Math.floor(Math.random() * 3) + 1;
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
  typeNumber === 3 && (query.limit = 2);
  isGeneral && delete query.include;
  let countries = await models.CountryGeneral.findAll(query);

  if (!isGeneral)
    answers = await Promise.all(
      countries.map(async (country) => country["get" + table]())
    );
  else answers = countries;

  let filteredAnswers = answers.map((value) => {
    return { country: value.country, field: value[field], type: typeNumber };
  });
  filteredAnswers = filteredAnswers.sort((a, b) =>
    operator ? b.field - a.field : a.field - b.field
  );
  filteredAnswers.forEach((value, index) =>
    index === 0 ? (value.right = true) : (value.right = false)
  );
  if (typeNumber === 1) {
    filteredAnswers = filteredAnswers.map((value) => {
      return { answer: value.country, type: value.type, right: value.right };
    });
  }
  if (typeNumber === 2) {
    question = question.replace("XXX", filteredAnswers[0].country);
    filteredAnswers = filteredAnswers.map((value) => {
      return { answer: value.field, type: value.type, right: value.right };
    });
  }

  if (typeNumber === 3) {
    shuffle(filteredAnswers);
    const isStatementTrue = filteredAnswers[0].field > filteredAnswers[1].field;
    question = question.replace("XXX", filteredAnswers[0].country);
    question = question.replace("YYY", filteredAnswers[1].country);
    filteredAnswers = filteredAnswers.map((value) => {
      return {
        right: isStatementTrue,
        type: value.type,
        field: value.field,
        country: value.country,
      };
    });
    filteredAnswers[0].answer = "true";
    filteredAnswers[1].answer = "false";
  }

  res.send({
    question: question,
    answers: shuffle(filteredAnswers),
  });
});

question.post("/save", async (req, res) => {
  const body = req.body;
  let savedQuestion = await models.SavedQuestion.findOne({
    where: { question: body.question },
  }).then((data) => {
    return data;
  });
  if (!savedQuestion) {
    models.SavedQuestion.create(
      {
        question: body.question,
        type: body.type,
        avg_rating: body.rating,
        rating_count: 1,
        right_answer: body.rightAnswer,
        wrong_answers:
          body.wrongOne + "," + body.wrongTwo + "," + body.wrongThree,
        used: true,
      },
      {
        fields: [
          "question",
          "type",
          "rating_count",
          "avg_rating",
          "right_answer",
          "wrong_answers",
          "used",
        ],
      }
    );
    res.send("Added");
  } else {
    const avgRating =
      (savedQuestion.avg_rating * savedQuestion.rating_count +
        Number(body.rating)) /
      (savedQuestion.rating_count + 1);
    models.SavedQuestion.update(
      {
        avg_rating: avgRating,
        rating_count: savedQuestion.rating_count + 1,
      },
      { where: { question: body.question } }
    );
    res.send("updated");
  }
});

question.get("/savedQuestion", async (req, res) => {
  let savedQuestion = await models.SavedQuestion.findOne({
    where: { used: false },
    order: [sequelize.random()],
  });
  if (!savedQuestion) return res.send("empty");
  savedQuestion = savedQuestion.toJSON();
  models.SavedQuestion.update(
    { used: true },
    { where: { id: savedQuestion.id } }
  );
  let answers = [
    {
      answer: savedQuestion.right_answer,
      type: savedQuestion.type,
      right: true,
    },
  ];
  let wrongAnswersArray = savedQuestion.wrong_answers.split(",");
  wrongAnswersArray = wrongAnswersArray.filter((value) => value !== "null");
  answers = answers.concat(
    wrongAnswersArray.map((answer) => {
      return { answer: answer, type: savedQuestion.type, right: false };
    })
  );
  res.send({ question: savedQuestion.question, answers: shuffle(answers) });
});

question.patch("/resetSaved", (req, res) => {
  models.SavedQuestion.update(
    { used: false },
    { where: { used: { [Op.not]: false } } }
  );
});

module.exports = question;
