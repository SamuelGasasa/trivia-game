const express = require("express");
const question = require("./routers/question");
const scoreboard = require("./routers/scoreboard");
const app = express();

app.use("/question", question);
app.use("/scoreboard", scoreboard);

app.get("/", (req, res) => {
  res.send("this is the app");
});

module.exports = app;
