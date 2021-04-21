'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Countries_age_structures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coutnry: {
        type: Sequelize.STRING
      },
      age_0_14_years: {
        type: Sequelize.INTEGER
      },
      age_15_64_years: {
        type: Sequelize.INTEGER
      },
      age_above_65_years: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Countries_age_structures');
  }
};