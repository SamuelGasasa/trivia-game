const { Router } = require("express");
const validateToken = require("../utils");
const information = Router();

information.get("/user", validateToken, (req, res) => {
  const { user } = req;
  res.send(user);
});

module.exports = information;
