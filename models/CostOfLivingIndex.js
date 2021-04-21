"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CostOfLivingIndex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.CountryGeneral, { foreignKey: "country" });
    }
  }
  CostOfLivingIndex.init(
    {
      country: DataTypes.STRING,
      cost_of_living_index: DataTypes.FLOAT,
      restaurant_price_index: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "CostOfLivingIndex",
      tableName: "cost_of_living_index",
      underscored: true,
    }
  );
  return CostOfLivingIndex;
};
