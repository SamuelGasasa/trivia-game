'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Countries_age_structure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Countries_age_structure.init({
    coutnry: DataTypes.STRING,
    age_0_14_years: DataTypes.INTEGER,
    age_15_64_years: DataTypes.INTEGER,
    age_above_65_years: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Countries_age_structure',
    underscored: true,
  });
  return Countries_age_structure;
};