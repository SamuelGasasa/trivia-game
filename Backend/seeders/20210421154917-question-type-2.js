"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "question-type2",
      [
        {
          question: "What is the capital of X?",
          field: "capital",
          table: "Capital",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "How many people live in X?",
          field: "population",
          table: "PopulationDensity",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "In what continent is X?",
          field: "continent",
          table: "Capital",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("question-type2", null, {});
  },
};
