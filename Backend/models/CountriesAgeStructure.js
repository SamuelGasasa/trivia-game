"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CountriesAgeStructure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.CountryGeneral, {
        foreignKey: "country",
        targetKey: "country",
      });    }
  }
  CountriesAgeStructure.init(
    {
      country: DataTypes.STRING,
      age_0_14_years: DataTypes.FLOAT,
      age_15_64_years: DataTypes.FLOAT,
      age_above_65_years: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "CountriesAgeStructure",
      tableName: "countries_age_structures",
      underscored: true,
    },
  );
  return CountriesAgeStructure;
};
