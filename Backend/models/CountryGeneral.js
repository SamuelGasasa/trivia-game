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
      this.hasOne(models.Capital, { foreignKey: "country" });
      this.hasOne(models.CostOfLivingIndex, { foreignKey: "country" });
      this.hasOne(models.CountriesAgeStructure, { foreignKey: "country" });
      this.hasOne(models.PopulationDensity, { foreignKey: "country" });
      this.hasOne(models.QualityOfLife, { foreignKey: "country" });
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
