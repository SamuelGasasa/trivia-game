const express = require("express");
const information = require("./routers/information");
const question = require("./routers/question");
const scoreboard = require("./routers/scoreboard");
const users = require("./routers/users");

const app = express();

app.use("/question", question);
app.use("/scoreboard", scoreboard);
app.use("/users", users);
app.use("/information", information);

app.get("/", (req, res) => {
  res.send("hello");
});
module.exports = app;
