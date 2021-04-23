const models = require("../models");
const express = require("express");
const scoreboard = express();
scoreboard.use(express.json());

scoreboard.get("/", async (req, res) => {
  const scores = await models.Score.findAll();
  const scoreToSend = scores.map((score) => {
    return {
      player: score.player,
      score: score.score,
      date: score.date.toLocaleString(),
    };
  });
  res.send(scoreToSend);
});

module.exports = scoreboard;
