require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const models = require("../models");
const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const express = require("express");
const User = require("../models/User");
const validateToken = require("../utils");
const users = express();
users.use(express.json());

users.post("/register", async (req, res) => {
  const reg = "[a-zA-Z0-9]$";
  const { username, password } = req.body;
  if (
    username === "" ||
    password === "" ||
    !username.match(reg) ||
    !password.match(reg)
  )
    return res.status(400).send("Invalid username or password");
  const exists = await models.User.findOne({ where: { username: username } });
  if (exists) return res.status(409).send("User exists");
  const newPassword = await bcrypt.hash(password, bcrypt.genSaltSync(10));
  models.User.create({ username, password: newPassword }).then(() =>
    res.status(201).send(username + " registered")
  );
});

users.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await models.User.findOne({ where: { username: username } });
  if (!user) return res.status(404).send("User doesn't exists");
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect) return res.status(401).send("Incorrect password");
  const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN);
  const refreshToken = jwt.sign({ username }, process.env.REFRESH_TOKEN);
  await models.RefreshToken.create({ token: refreshToken });

  res.status(200).send({ refreshToken, accessToken });
});

users.post("/logout", validateToken, async (req, res) => {
  const refreshToken = req.get("refreshToken");
  await models.RefreshToken.destroy({ where: { token: refreshToken } });
  res.status(200).send("Logout Successfully");
});

users.post("/token", async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).send("Refresh Token Required");
  const isValid = await models.RefreshToken.findOne({
    where: { token: refreshToken },
  });
  if (!isValid) return res.status(403).send("Invalid Refresh Token");
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
    if (err) return res.status(403).send("Invalid Refresh Token");
    const { username } = decoded;
    const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN, {
      expiresIn: "10s",
    });
    res.send({ authorization: accessToken, username: username });
  });
});

module.exports = users;
