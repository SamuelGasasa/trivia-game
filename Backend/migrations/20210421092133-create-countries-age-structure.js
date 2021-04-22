"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("countries_age_structures", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      country: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      age_0_14_years: {
        type: Sequelize.FLOAT,
      },
      age_15_64_years: {
        type: Sequelize.FLOAT,
      },
      age_above_65_years: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable("countries_age_structures");
  },
};
