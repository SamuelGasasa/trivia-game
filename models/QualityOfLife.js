"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QualityOfLife extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.CountryGeneral, { foreignKey: "country" });
    }
  }
  QualityOfLife.init(
    {
      country: DataTypes.STRING,
      quality_of_life_index: DataTypes.INTEGER,
      purchasing_power_index: DataTypes.INTEGER,
      safety_index: DataTypes.INTEGER,
      healthcare_index: DataTypes.INTEGER,
      cost_of_living_index: DataTypes.INTEGER,
      property_price_to_income_ratio: DataTypes.INTEGER,
      traffic_commute_time_index: DataTypes.INTEGER,
      pollution_index: DataTypes.INTEGER,
      climate_index: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "QualityOfLife",
      tableName: "quality_of_lives",
      underscored: true,
    }
  );
  return QualityOfLife;
};
