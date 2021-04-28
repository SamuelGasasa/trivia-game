require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const models = require("../models");
const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const express = require("express");
const User = require("../models/User");
const users = express();
users.use(express.json());

let refreshTokens = [];

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
  if (exists) return res.status(400).send("User Exists");
  const newPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  models.User.create({ username, password: newPassword }).then(() =>
    res.status(201).send(username + " registered")
  );
});

users.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await models.User.findOne({ where: { username: username } });
  if (!user) return res.status(400).send("User doesn't exists");
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect) return res.status("401").send("Incorrect password");
  const refreshToken = jwt.sign({ username }, process.env.REFRESH_TOKEN);
  refreshTokens.push(refreshToken);
  console.log(refreshTokens);

  res.status(200).send({ refreshToken });
});

users.post("/logout", validateToken, (req, res) => {
  const { user } = req;
  refreshTokens = refreshTokens.filter((token) => {
    return jwt.verify(token, process.env.REFRESH_TOKEN, (err, decoded) => {
      console.log(user.username, decoded.username);
      if (err) return res.send(err);
      if (decoded.username === user.username) return false;
      else return true;
    });
  });
  res.status(200).send("Logout Successfully");
});

users.post("/token", (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).send("Refresh Token Required");
  if (!refreshTokens.includes(refreshToken))
    return res.status(403).send("Invalid Refresh Token");
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
    if (err) return res.status(403).send("Invalid Refresh Token");
    const { username } = decoded;
    const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN, {
      expiresIn: "10s",
    });
    res.send({ authorization: `Bearer ${accessToken}` });
  });
});

function validateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).send("Access Token Required");
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) return res.status(403).send("Invalid Access Token");
    req.user = decoded;
    next();
  });
}

module.exports = users;
