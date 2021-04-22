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
      this.belongsTo(models.CountryGeneral, {
        foreignKey: "country",
        targetKey: "country",
      });
    }
  }
  QualityOfLife.init(
    {
      country: DataTypes.STRING,
      quality_of_life_index: DataTypes.FLOAT,
      safety_index: DataTypes.FLOAT,
      crime_index: DataTypes.FLOAT,
      traffic_commute_time_index: DataTypes.FLOAT,
      pollution_index: DataTypes.FLOAT,
      climate_index: DataTypes.FLOAT,
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
