"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CountryGeneral extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Capital, {
        sourceKey: "country",
        foreignKey: "country",
      });
      this.hasOne(models.CostOfLivingIndex, {
        sourceKey: "country",
        foreignKey: "country",
      });
      this.hasOne(models.CountriesAgeStructure, {
        sourceKey: "country",
        foreignKey: "country",
      });
      this.hasOne(models.PopulationDensity, {
        sourceKey: "country",
        foreignKey: "country",
      });
      this.hasOne(models.QualityOfLife, {
        sourceKey: "country",
        foreignKey: "country",
      });
    }
  }
  CountryGeneral.init(
    {
      country: DataTypes.STRING,
      literacy: DataTypes.FLOAT,
      phones: DataTypes.FLOAT,
      birthrate: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "CountryGeneral",
      tableName: "countries_general",
      underscored: true,
    }
  );
  return CountryGeneral;
};
