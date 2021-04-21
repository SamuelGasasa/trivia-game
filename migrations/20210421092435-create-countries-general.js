"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Countries_Generals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      country: {
        type: Sequelize.STRING,
      },
      region: {
        type: Sequelize.STRING,
      },
      coastline: {
        type: Sequelize.STRING,
      },
      net_migration: {
        type: Sequelize.INTEGER,
      },
      infant_mortality: {
        type: Sequelize.INTEGER,
      },
      GDP: {
        type: Sequelize.INTEGER,
      },
      literacy: {
        type: Sequelize.INTEGER,
      },
      phones: {
        type: Sequelize.INTEGER,
      },
      arable: {
        type: Sequelize.INTEGER,
      },
      crops: {
        type: Sequelize.INTEGER,
      },
      other: {
        type: Sequelize.INTEGER,
      },
      climate: {
        type: Sequelize.INTEGER,
      },
      birthrate: {
        type: Sequelize.INTEGER,
      },
      deathrate: {
        type: Sequelize.INTEGER,
      },
      agriculture: {
        type: Sequelize.INTEGER,
      },
      industry: {
        type: Sequelize.INTEGER,
      },
      service: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Countries_Generals");
  },
};
