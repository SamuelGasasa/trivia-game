"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("population_densities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      country: {
        type: Sequelize.STRING,
      },
      area_km2: {
        type: Sequelize.INTEGER,
      },
      area_mi2: {
        type: Sequelize.INTEGER,
      },
      population: {
        type: Sequelize.INTEGER,
      },
      density_pop_to_km2: {
        type: Sequelize.INTEGER,
      },
      density_pop_to_mi2: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      population_source: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("population_densities");
  },
};
