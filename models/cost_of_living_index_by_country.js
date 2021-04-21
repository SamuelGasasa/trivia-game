"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cost_of_living_index_by_country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cost_of_living_index_by_country.init(
    {
      country: DataTypes.STRING,
      cost_of_living_index: DataTypes.INTEGER,
      rent_index: DataTypes.INTEGER,
      cost_of_living_plus_rent_index: DataTypes.INTEGER,
      groceries_index: DataTypes.INTEGER,
      restaurant_price_index: DataTypes.INTEGER,
      local_purchasing_power_index: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cost_of_living_index_by_country",
      underscored: true,
    },
  );
  return cost_of_living_index_by_country;
};
