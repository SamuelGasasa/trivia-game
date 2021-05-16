const models = require("../models");
const express = require("express");
const scoreboard = express();

scoreboard.use(express.json());

scoreboard.get("/", async (req, res) => {
  const scores = await models.Score.findAll({
    order: [["score", "DESC"]],
  });
  const scoreToSend = scores.map((score) => {
    return {
      player: score.username,
      score: score.score,
      date: score.createdAt.toLocaleString(),
    };
  });
  res.status(200).send(scoreToSend);
});

scoreboard.get("/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const userScore = await models.Score.findOne({
      where: { username: username },
    });
    res.json(userScore.score);
  } catch (err) {
    res.json(undefined);
  }
});

scoreboard.post("/", async (req, res) => {
  const { body } = req;
  try {
    const currentUserScore = await models.Score.findOne({
      where: { username: body.player },
    });
    if (currentUserScore) {
      if (body.score > currentUserScore.score) {
        models.Score.update(
          { score: body.score },
          { where: { username: body.player } }
        ).then(() => {
          res.status(200).send({ message: "score updated" });
        });
      } else {
        res.status(200).send({ message: "last score saved" });
      }
    } else {
      const scoreToSave = {
        username: body.player,
        score: body.score,
        date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      };
      models.Score.create(scoreToSave).then(() => {
        res.status(201).send({ message: "score received" });
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = scoreboard;
