"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "Omer Botbol",
          password:
            "$2b$10$3J/fiFMsh/ZaA6PwneiADeg1CoNaPQ14ShJhgMwuVhQpP3O9GpApG",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "Yuval Nakav",
          password:
            "$2b$10$2EUS8V1XiBPmufBt1KJVp.2LWoJ68lNeypEpjfVU0klESacwUHzTe",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "Samuel Gasasa",
          password:
            "$2b$10$Ifuh8I4nWoiwuHI0SWKFdeKGdUFZ/9xIvpQH43JmxAKwMoBA/oUXq",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "Oren Bachar",
          password:
            "$2b$10$9xWtMUcoP206s5WnebcVgu98SSa2ZOVNUxmZQnbp/O.g1FNMRj0tW",
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
