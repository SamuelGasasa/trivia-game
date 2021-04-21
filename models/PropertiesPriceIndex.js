"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PropertiesPriceIndex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PropertiesPriceIndex.init(
    {
      Country: DataTypes.STRING,
      price_to_income_ratio: DataTypes.INTEGER,
      gross_rental_yield_city_center: DataTypes.INTEGER,
      price_to_rent_ratio_city_center: DataTypes.INTEGER,
      price_to_rent_ratio_outside_of_city_center: DataTypes.INTEGER,
      mortgage_as_a_percentage_of_income: DataTypes.INTEGER,
      affordability_index: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PropertiesPriceIndex",
      tableName: "properties_price_index",
      underscored: true,
    }
  );
  return PropertiesPriceIndex;
};
