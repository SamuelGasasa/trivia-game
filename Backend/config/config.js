require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.password,
    database: process.env.database,
    seederStorage: "sequelize",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
  test: {
    username: "root",
    password: process.env.password,
    database: process.env.database,
    seederStorage: "sequelize",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
