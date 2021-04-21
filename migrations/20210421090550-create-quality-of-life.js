"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("quality_of_lives", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      country: {
        type: Sequelize.STRING,
      },
      quality_of_life_index: {
        type: Sequelize.FLOAT,
      },
      safety_index: {
        type: Sequelize.FLOAT,
      },
      crime_index: {
        type: Sequelize.FLOAT,
      },
      traffic_commute_time_index: {
        type: Sequelize.FLOAT,
      },
      pollution_index: {
        type: Sequelize.FLOAT,
      },
      climate_index: {
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
    await queryInterface.dropTable("quality_of_lives");
  },
};
