"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("questions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.INTEGER,
      },
      avg_rating: {
        type: Sequelize.INTEGER,
      },
      rating_count: {
        type: Sequelize.INTEGER,
      },
      right_answer: {
        type: Sequelize.STRING,
      },
      wrong_1: {
        type: Sequelize.STRING,
      },
      wrong_2: {
        type: Sequelize.STRING,
      },
      wrong_3: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("questions");
  },
};
