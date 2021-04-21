"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PopulationDensity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.CountryGeneral, { foreignKey: "country" });
    }
  }
  PopulationDensity.init(
    {
      country: DataTypes.STRING,
      area_km2: DataTypes.Integer,
      area_mi2: DataTypes.Integer,
      population: DataTypes.Integer,
      density_pop_to_km2: DataTypes.Integer,
      density_pop_to_mi2: DataTypes.Integer,
      date: DataTypes.DATE,
      population_source: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PopulationDensity",
      tableName: "population_densities",
      underscored: true,
    }
  );
  return PopulationDensity;
};
