const express = require("express");
const question = require("./routers/question");
const scoreboard = require("./routers/scoreboard");
const users = require("./routers/users");

const app = express();

app.use("/question", question);
app.use("/scoreboard", scoreboard);
app.use("/users", users);
module.exports = app;
