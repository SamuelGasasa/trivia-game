require("dotenv").config();
const models = require("../models");
const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const express = require("express");
const users = express();
users.use(express.json());

users.get("/test", async (req, res) => {
  const user = await models.User.findOne({});
  const score = await user.getScores();
  res.send({ user, score });
});

module.exports = users;
