"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("saved-questions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.STRING,
      },
      avg_rating: {
        type: Sequelize.FLOAT,
      },
      rating_count: {
        type: Sequelize.INTEGER,
      },
      right_answer: {
        type: Sequelize.STRING,
      },
      wrong_answers: {
        type: Sequelize.STRING,
      },
      used: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("saved-questions");
  },
};
