"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("saved_questions", {
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
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable("saved_questions");
  },
};
