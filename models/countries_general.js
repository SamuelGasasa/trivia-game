"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Countries_General extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Countries_General.init(
    {
      country: DataTypes.STRING,
      region: DataTypes.STRING,
      coastline: DataTypes.STRING,
      netMigration: DataTypes.INTEGER,
      infantMortality: DataTypes.INTEGER,
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
      modelName: "Countries_General",
    }
  );
  return Countries_General;
};
