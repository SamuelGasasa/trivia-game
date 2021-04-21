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
      this.hasOne(models.CostOfLiving, { foreignKey: "country" });
      this.hasOne(models.CountriesAgeStructure, { foreignKey: "country" });
      this.hasOne(models.CrimeIndex, { foreignKey: "country" });
      this.hasOne(models.HealthcareIndex, { foreignKey: "country" });
      this.hasOne(models.PopulationDensity, { foreignKey: "country" });
      this.hasOne(models.PropertiesPriceIndex, { foreignKey: "country" });
      this.hasOne(models.QualityOfLife, { foreignKey: "country" });
    }
  }
  CountryGeneral.init(
    {
      country: DataTypes.STRING,
      region: DataTypes.STRING,
      coastline: DataTypes.STRING,
      net_migration: DataTypes.INTEGER,
      infant_mortality: DataTypes.INTEGER,
      GDP: DataTypes.INTEGER,
      literacy: DataTypes.INTEGER,
      phones: DataTypes.INTEGER,
      arable: DataTypes.INTEGER,
      crops: DataTypes.INTEGER,
      other: DataTypes.INTEGER,
      climate: DataTypes.INTEGER,
      birthrate: DataTypes.INTEGER,
      deathrate: DataTypes.INTEGER,
      agriculture: DataTypes.INTEGER,
      industry: DataTypes.INTEGER,
      service: DataTypes.INTEGER,
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
