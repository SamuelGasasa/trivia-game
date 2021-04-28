require("dotenv").config();
const models = require("../models");
const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const express = require("express");
const users = express();
users.use(express.json());

users.get("/test", async (req, res) => {
  const player = await models.Score.findOne({});
  res.send(player);
});

module.exports = users;
