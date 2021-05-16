require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.password,
    database: process.env.database,
    seederStorage: "sequelize",
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
  },
  test: {
    username: "root",
    password: process.env.password,
    database: process.env.test_database,
    seederStorage: "sequelize",
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: "root",
    password: process.env.password,
    database: process.env.database,
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
  },
};
