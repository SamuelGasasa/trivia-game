'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Properties_price_index extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Properties_price_index.init({
    Country: DataTypes.STRING,
    price_to_income_ratio: DataTypes.INTEGER,
    Gross_rental_yield_city_center: DataTypes.INTEGER,
    price_to_rent_ratio_city_center: DataTypes.INTEGER,
    Price_to_rent_ratio_outside_of_city_center: DataTypes.INTEGER,
    Mortgage_as_a_percantege_of_income: DataTypes.INTEGER,
    affordebility_index: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Properties_price_index',
    underscored: true,
  });
  return Properties_price_index;
};