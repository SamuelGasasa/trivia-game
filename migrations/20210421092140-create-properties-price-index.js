'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Properties_price_indices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Country: {
        type: Sequelize.STRING
      },
      price_to_income_ratio: {
        type: Sequelize.INTEGER
      },
      Gross_rental_yield_city_center: {
        type: Sequelize.INTEGER
      },
      price_to_rent_ratio_city_center: {
        type: Sequelize.INTEGER
      },
      Price_to_rent_ratio_outside_of_city_center: {
        type: Sequelize.INTEGER
      },
      Mortgage_as_a_percantege_of_income: {
        type: Sequelize.INTEGER
      },
      affordebility_index: {
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
    await queryInterface.dropTable('Properties_price_indices');
  }
};