const express = require("express");
const path = require("path");
const information = require("./routers/information");
const question = require("./routers/question");
const scoreboard = require("./routers/scoreboard");
const users = require("./routers/users");

const app = express();
app.use(express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});
app.use("/question", question);
app.use("/scoreboard", scoreboard);
app.use("/users", users);
app.use("/information", information);

module.exports = app;
