"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "scores",
      [
        {
          player: "Omer Botbol",
          score: 400,
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          player: "Yuval Nakav",
          score: 600,
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          player: "Samuel Gasasa",
          score: 700,
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          player: "Oren Bachar",
          score: 500,
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("scores", null, {});
  },
};
