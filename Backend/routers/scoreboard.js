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

scoreboard.post("/", (req, res) => {
  const scoreToSave = {
    player: req.body.player,
    score: req.body.score,
    date: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
  };
  models.Score.create(scoreToSave).then(() => {
    res.send({ message: "score received" });
  });
});

module.exports = scoreboard;
