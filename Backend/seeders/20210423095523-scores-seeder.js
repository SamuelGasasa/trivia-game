"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "scores",
      [
        {
          username: "Omer Botbol",
          score: 400,
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "Yuval Nakav",
          score: 600,
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "Samuel Gasasa",
          score: 700,
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "Oren Bachar",
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
