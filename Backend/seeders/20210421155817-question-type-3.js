"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "question-type3",
      [
        {
          question: "Are there more people in XXX than in YYY?",
          operator: true,
          field: "population",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Is XXX larger than YYY?",
          operator: true,
          field: "area_km2",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Does XXX have a higher population density than YYY?",
          operator: true,
          field: "density_pop_to_km2",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question:
            "Is the quality of life in XXX higher than the quality of life in YYY?",
          operator: true,
          field: "quality_of_life_index",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question:
            "Is the crime rate of XXX higher than the crime rate in YYY?",
          operator: true,
          field: "crime_index",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question:
            "Are restaurants in XXX more expensive than restaurants in YYY?",
          operator: true,
          field: "restaurant_price_index",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("question-type3", null, {});
  },
};
