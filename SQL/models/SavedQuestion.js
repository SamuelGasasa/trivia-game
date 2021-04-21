"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SavedQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SavedQuestion.init(
    {
      question: DataTypes.STRING,
      type: DataTypes.INTEGER,
      avg_rating: DataTypes.FLOAT,
      rating_count: DataTypes.INTEGER,
      right_answer: DataTypes.STRING,
      wrong_1: DataTypes.STRING,
      wrong_2: DataTypes.STRING,
      wrong_3: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SavedQuestion",
      tableName: "saved_questions",
      underscored: true,
    }
  );
  return SavedQuestion;
};
