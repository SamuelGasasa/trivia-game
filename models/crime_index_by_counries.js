"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class crime_index_by_countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  crime_index_by_countries.init(
    {
      country: DataTypes.STRING,
      crime_index: DataTypes.INTEGER,
      safety_index: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "crime_index_by_countries",
    },
  );
  return crime_index_by_countries;
};
