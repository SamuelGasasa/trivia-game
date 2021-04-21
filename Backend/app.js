const express = require("express");
const question = require("./routers/question");
const app = express();

app.use("/question", question);

app.get("/", (req, res) => {
  res.send("this is the app");
});

module.exports = app;
