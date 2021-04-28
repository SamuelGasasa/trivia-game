"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "Omer Botbol",
          password: "Omer1234",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "Yuval Nakav",
          password: "Yuval1234",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "Samuel Gasasa",
          password: "Samuel1234",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "Oren Bachar",
          password: "Oren1234",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
