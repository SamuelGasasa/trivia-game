"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "countries_age_structures",
      [
        {
          country: "Japan",
          age_0_14_years: 0.129,
          age_15_64_years: 0.601,
          age_above_65_years: 0.27,
        },
        {
          country: "Italy",
          age_0_14_years: 0.135,
          age_15_64_years: 0.635,
          age_above_65_years: 0.23,
        },
        {
          country: "Portugal",
          age_0_14_years: 0.136,
          age_15_64_years: 0.649,
          age_above_65_years: 0.22,
        },
        {
          country: "Germany",
          age_0_14_years: 0.131,
          age_15_64_years: 0.655,
          age_above_65_years: 0.22,
        },
        {
          country: "Finland",
          age_0_14_years: 0.164,
          age_15_64_years: 0.624,
          age_above_65_years: 0.21,
        },
        {
          country: "Bulgaria",
          age_0_14_years: 0.142,
          age_15_64_years: 0.65,
          age_above_65_years: 0.21,
        },
        {
          country: "Greece",
          age_0_14_years: 0.142,
          age_15_64_years: 0.654,
          age_above_65_years: 0.2,
        },
        {
          country: "Sweden",
          age_0_14_years: 0.175,
          age_15_64_years: 0.625,
          age_above_65_years: 0.2,
        },
        {
          country: "Latvia",
          age_0_14_years: 0.154,
          age_15_64_years: 0.648,
          age_above_65_years: 0.2,
        },
        {
          country: "Denmark",
          age_0_14_years: 0.165,
          age_15_64_years: 0.638,
          age_above_65_years: 0.2,
        },
        {
          country: "France",
          age_0_14_years: 0.181,
          age_15_64_years: 0.622,
          age_above_65_years: 0.2,
        },
        {
          country: "Croatia",
          age_0_14_years: 0.147,
          age_15_64_years: 0.656,
          age_above_65_years: 0.2,
        },
        {
          country: "Estonia",
          age_0_14_years: 0.164,
          age_15_64_years: 0.642,
          age_above_65_years: 0.2,
        },
        {
          country: "Malta",
          age_0_14_years: 0.144,
          age_15_64_years: 0.661,
          age_above_65_years: 0.19,
        },
        {
          country: "Spain",
          age_0_14_years: 0.147,
          age_15_64_years: 0.659,
          age_above_65_years: 0.19,
        },
        {
          country: "Austria",
          age_0_14_years: 0.141,
          age_15_64_years: 0.667,
          age_above_65_years: 0.19,
        },
        {
          country: "Slovenia",
          age_0_14_years: 0.15,
          age_15_64_years: 0.66,
          age_above_65_years: 0.19,
        },
        {
          country: "Czech Republic",
          age_0_14_years: 0.154,
          age_15_64_years: 0.656,
          age_above_65_years: 0.19,
        },
        {
          country: "Lithuania",
          age_0_14_years: 0.148,
          age_15_64_years: 0.662,
          age_above_65_years: 0.19,
        },
        {
          country: "Netherlands",
          age_0_14_years: 0.164,
          age_15_64_years: 0.648,
          age_above_65_years: 0.19,
        },
        {
          country: "Hungary",
          age_0_14_years: 0.143,
          age_15_64_years: 0.671,
          age_above_65_years: 0.19,
        },
        {
          country: "US Virgin Islands (US)",
          age_0_14_years: 0.201,
          age_15_64_years: 0.613,
          age_above_65_years: 0.19,
        },
        {
          country: "Belgium",
          age_0_14_years: 0.171,
          age_15_64_years: 0.643,
          age_above_65_years: 0.19,
        },
        {
          country: "United Kingdom",
          age_0_14_years: 0.177,
          age_15_64_years: 0.638,
          age_above_65_years: 0.19,
        },
        {
          country: "Switzerland",
          age_0_14_years: 0.149,
          age_15_64_years: 0.667,
          age_above_65_years: 0.18,
        },
        {
          country: "Romania",
          age_0_14_years: 0.153,
          age_15_64_years: 0.669,
          age_above_65_years: 0.18,
        },
        {
          country: "Serbia",
          age_0_14_years: 0.165,
          age_15_64_years: 0.662,
          age_above_65_years: 0.17,
        },
        {
          country: "Canada",
          age_0_14_years: 0.16,
          age_15_64_years: 0.67,
          age_above_65_years: 0.17,
        },
        {
          country: "Norway",
          age_0_14_years: 0.178,
          age_15_64_years: 0.654,
          age_above_65_years: 0.17,
        },
        {
          country: "Poland",
          age_0_14_years: 0.148,
          age_15_64_years: 0.684,
          age_above_65_years: 0.17,
        },
        {
          country: "Bosnia and Herzegovina",
          age_0_14_years: 0.141,
          age_15_64_years: 0.693,
          age_above_65_years: 0.17,
        },
        {
          country: "Ukraine",
          age_0_14_years: 0.155,
          age_15_64_years: 0.68,
          age_above_65_years: 0.17,
        },
        {
          country: "Curaçao",
          age_0_14_years: 0.187,
          age_15_64_years: 0.649,
          age_above_65_years: 0.16,
        },
        {
          country: "Hong Kong",
          age_0_14_years: 0.115,
          age_15_64_years: 0.722,
          age_above_65_years: 0.16,
        },
        {
          country: "Australia",
          age_0_14_years: 0.19,
          age_15_64_years: 0.655,
          age_above_65_years: 0.16,
        },
        {
          country: "United States",
          age_0_14_years: 0.189,
          age_15_64_years: 0.657,
          age_above_65_years: 0.15,
        },
        {
          country: "New Zealand",
          age_0_14_years: 0.198,
          age_15_64_years: 0.649,
          age_above_65_years: 0.15,
        },
        {
          country: "Puerto Rico (US)",
          age_0_14_years: 0.179,
          age_15_64_years: 0.669,
          age_above_65_years: 0.15,
        },
        {
          country: "Slovakia",
          age_0_14_years: 0.154,
          age_15_64_years: 0.696,
          age_above_65_years: 0.15,
        },
        {
          country: "Barbados",
          age_0_14_years: 0.191,
          age_15_64_years: 0.66,
          age_above_65_years: 0.15,
        },
        {
          country: "Georgia",
          age_0_14_years: 0.192,
          age_15_64_years: 0.66,
          age_above_65_years: 0.15,
        },
        {
          country: "Belarus",
          age_0_14_years: 0.167,
          age_15_64_years: 0.685,
          age_above_65_years: 0.15,
        },
        {
          country: "Montenegro",
          age_0_14_years: 0.181,
          age_15_64_years: 0.671,
          age_above_65_years: 0.15,
        },
        {
          country: "Uruguay",
          age_0_14_years: 0.211,
          age_15_64_years: 0.643,
          age_above_65_years: 0.15,
        },
        {
          country: "Cuba",
          age_0_14_years: 0.161,
          age_15_64_years: 0.692,
          age_above_65_years: 0.15,
        },
        {
          country: "Iceland",
          age_0_14_years: 0.201,
          age_15_64_years: 0.655,
          age_above_65_years: 0.14,
        },
        {
          country: "Luxembourg",
          age_0_14_years: 0.165,
          age_15_64_years: 0.692,
          age_above_65_years: 0.14,
        },
        {
          country: "Russia",
          age_0_14_years: 0.176,
          age_15_64_years: 0.682,
          age_above_65_years: 0.14,
        },
        {
          country: "South Korea",
          age_0_14_years: 0.135,
          age_15_64_years: 0.726,
          age_above_65_years: 0.14,
        },
        {
          country: "Ireland",
          age_0_14_years: 0.216,
          age_15_64_years: 0.644,
          age_above_65_years: 0.14,
        },
        {
          country: "Taiwan",
          age_0_14_years: 0.1312,
          age_15_64_years: 0.7302,
          age_above_65_years: 0.14,
        },
        {
          country: "Cyprus",
          age_0_14_years: 0.168,
          age_15_64_years: 0.698,
          age_above_65_years: 0.13,
        },
        {
          country: "Albania",
          age_0_14_years: 0.174,
          age_15_64_years: 0.689,
          age_above_65_years: 0.13,
        },
        {
          country: "Aruba (Netherlands)",
          age_0_14_years: 0.179,
          age_15_64_years: 0.69,
          age_above_65_years: 0.13,
        },
        {
          country: "Singapore",
          age_0_14_years: 0.15,
          age_15_64_years: 0.721,
          age_above_65_years: 0.13,
        },
        {
          country: "North Macedonia",
          age_0_14_years: 0.237,
          age_15_64_years: 0.644,
          age_above_65_years: 0.12,
        },
        {
          country: "Israel",
          age_0_14_years: 0.279,
          age_15_64_years: 0.604,
          age_above_65_years: 0.12,
        },
        {
          country: "Thailand",
          age_0_14_years: 0.173,
          age_15_64_years: 0.713,
          age_above_65_years: 0.11,
        },
        {
          country: "Argentina",
          age_0_14_years: 0.249,
          age_15_64_years: 0.639,
          age_above_65_years: 0.11,
        },
        {
          country: "Armenia",
          age_0_14_years: 0.2,
          age_15_64_years: 0.688,
          age_above_65_years: 0.11,
        },
        {
          country: "Chile",
          age_0_14_years: 0.203,
          age_15_64_years: 0.686,
          age_above_65_years: 0.11,
        },
        {
          country: "Mauritius",
          age_0_14_years: 0.184,
          age_15_64_years: 0.707,
          age_above_65_years: 0.11,
        },
        {
          country: "Moldova",
          age_0_14_years: 0.157,
          age_15_64_years: 0.734,
          age_above_65_years: 0.11,
        },
        {
          country: "China",
          age_0_14_years: 0.177,
          age_15_64_years: 0.717,
          age_above_65_years: 0.11,
        },
        {
          country: "Sri Lanka",
          age_0_14_years: 0.24,
          age_15_64_years: 0.659,
          age_above_65_years: 0.1,
        },
        {
          country: "Trinidad and Tobago",
          age_0_14_years: 0.207,
          age_15_64_years: 0.693,
          age_above_65_years: 0.1,
        },
        {
          country: "Macau",
          age_0_14_years: 0.134,
          age_15_64_years: 0.769,
          age_above_65_years: 0.1,
        },
        {
          country: "Jamaica",
          age_0_14_years: 0.227,
          age_15_64_years: 0.676,
          age_above_65_years: 0.1,
        },
        {
          country: "Saint Lucia",
          age_0_14_years: 0.189,
          age_15_64_years: 0.714,
          age_above_65_years: 0.1,
        },
        {
          country: "Guam (US)",
          age_0_14_years: 0.247,
          age_15_64_years: 0.657,
          age_above_65_years: 0.1,
        },
        {
          country: "Costa Rica",
          age_0_14_years: 0.213,
          age_15_64_years: 0.689,
          age_above_65_years: 0.1,
        },
        {
          country: "North Korea",
          age_0_14_years: 0.206,
          age_15_64_years: 0.699,
          age_above_65_years: 0.1,
        },
        {
          country: "Bahamas",
          age_0_14_years: 0.205,
          age_15_64_years: 0.706,
          age_above_65_years: 0.09,
        },
        {
          country: "Brazil",
          age_0_14_years: 0.217,
          age_15_64_years: 0.697,
          age_above_65_years: 0.09,
        },
        {
          country: "Seychelles",
          age_0_14_years: 0.222,
          age_15_64_years: 0.692,
          age_above_65_years: 0.09,
        },
        {
          country: "Lebanon",
          age_0_14_years: 0.231,
          age_15_64_years: 0.684,
          age_above_65_years: 0.09,
        },
        {
          country: "El Salvador",
          age_0_14_years: 0.274,
          age_15_64_years: 0.644,
          age_above_65_years: 0.08,
        },
        {
          country: "Turkey",
          age_0_14_years: 0.25,
          age_15_64_years: 0.669,
          age_above_65_years: 0.08,
        },
        {
          country: "Tunisia",
          age_0_14_years: 0.24,
          age_15_64_years: 0.68,
          age_above_65_years: 0.08,
        },
        {
          country: "Panama",
          age_0_14_years: 0.274,
          age_15_64_years: 0.647,
          age_above_65_years: 0.08,
        },
        {
          country: "Saint Vincent and the Grenadines",
          age_0_14_years: 0.238,
          age_15_64_years: 0.685,
          age_above_65_years: 0.08,
        },
        {
          country: "Colombia",
          age_0_14_years: 0.235,
          age_15_64_years: 0.689,
          age_above_65_years: 0.08,
        },
        {
          country: "Grenada",
          age_0_14_years: 0.263,
          age_15_64_years: 0.664,
          age_above_65_years: 0.07,
        },
        {
          country: "Peru",
          age_0_14_years: 0.274,
          age_15_64_years: 0.655,
          age_above_65_years: 0.07,
        },
        {
          country: "Vietnam",
          age_0_14_years: 0.231,
          age_15_64_years: 0.698,
          age_above_65_years: 0.07,
        },
        {
          country: "Ecuador",
          age_0_14_years: 0.284,
          age_15_64_years: 0.645,
          age_above_65_years: 0.07,
        },
        {
          country: "Dominican Republic",
          age_0_14_years: 0.293,
          age_15_64_years: 0.637,
          age_above_65_years: 0.07,
        },
        {
          country: "Kazakhstan",
          age_0_14_years: 0.279,
          age_15_64_years: 0.651,
          age_above_65_years: 0.07,
        },
        {
          country: "Mexico",
          age_0_14_years: 0.267,
          age_15_64_years: 0.665,
          age_above_65_years: 0.07,
        },
        {
          country: "Antigua and Barbuda",
          age_0_14_years: 0.239,
          age_15_64_years: 0.692,
          age_above_65_years: 0.07,
        },
        {
          country: "Suriname",
          age_0_14_years: 0.264,
          age_15_64_years: 0.666,
          age_above_65_years: 0.07,
        },
        {
          country: "Morocco",
          age_0_14_years: 0.274,
          age_15_64_years: 0.658,
          age_above_65_years: 0.07,
        },
        {
          country: "Bolivia",
          age_0_14_years: 0.316,
          age_15_64_years: 0.617,
          age_above_65_years: 0.07,
        },
        {
          country: "Venezuela",
          age_0_14_years: 0.276,
          age_15_64_years: 0.658,
          age_above_65_years: 0.07,
        },
        {
          country: "Paraguay",
          age_0_14_years: 0.294,
          age_15_64_years: 0.642,
          age_above_65_years: 0.06,
        },
        {
          country: "Malaysia",
          age_0_14_years: 0.243,
          age_15_64_years: 0.694,
          age_above_65_years: 0.06,
        },
        {
          country: "Algeria",
          age_0_14_years: 0.293,
          age_15_64_years: 0.645,
          age_above_65_years: 0.06,
        },
        {
          country: "Fiji",
          age_0_14_years: 0.285,
          age_15_64_years: 0.653,
          age_above_65_years: 0.06,
        },
        {
          country: "India",
          age_0_14_years: 0.278,
          age_15_64_years: 0.662,
          age_above_65_years: 0.06,
        },
        {
          country: "Azerbaijan",
          age_0_14_years: 0.233,
          age_15_64_years: 0.707,
          age_above_65_years: 0.06,
        },
        {
          country: "Nepal",
          age_0_14_years: 0.309,
          age_15_64_years: 0.633,
          age_above_65_years: 0.06,
        },
        {
          country: "Tonga",
          age_0_14_years: 0.358,
          age_15_64_years: 0.583,
          age_above_65_years: 0.06,
        },
        {
          country: "Myanmar",
          age_0_14_years: 0.268,
          age_15_64_years: 0.674,
          age_above_65_years: 0.06,
        },
        {
          country: "Samoa",
          age_0_14_years: 0.366,
          age_15_64_years: 0.578,
          age_above_65_years: 0.06,
        },
        {
          country: "Nicaragua",
          age_0_14_years: 0.29,
          age_15_64_years: 0.655,
          age_above_65_years: 0.05,
        },
        {
          country: "Iran",
          age_0_14_years: 0.237,
          age_15_64_years: 0.709,
          age_above_65_years: 0.05,
        },
        {
          country: "Indonesia",
          age_0_14_years: 0.274,
          age_15_64_years: 0.673,
          age_above_65_years: 0.05,
        },
        {
          country: "Guyana",
          age_0_14_years: 0.281,
          age_15_64_years: 0.657,
          age_above_65_years: 0.05,
        },
        {
          country: "South Africa",
          age_0_14_years: 0.29,
          age_15_64_years: 0.657,
          age_above_65_years: 0.05,
        },
        {
          country: "Egypt",
          age_0_14_years: 0.335,
          age_15_64_years: 0.614,
          age_above_65_years: 0.05,
        },
        {
          country: "Bangladesh",
          age_0_14_years: 0.284,
          age_15_64_years: 0.665,
          age_above_65_years: 0.05,
        },
        {
          country: "Bhutan",
          age_0_14_years: 0.266,
          age_15_64_years: 0.686,
          age_above_65_years: 0.05,
        },
        {
          country: "Philippines",
          age_0_14_years: 0.317,
          age_15_64_years: 0.635,
          age_above_65_years: 0.05,
        },
        {
          country: "Haiti",
          age_0_14_years: 0.33,
          age_15_64_years: 0.622,
          age_above_65_years: 0.05,
        },
        {
          country: "Federated States of Micronesia",
          age_0_14_years: 0.331,
          age_15_64_years: 0.621,
          age_above_65_years: 0.05,
        },
        {
          country: "Honduras",
          age_0_14_years: 0.316,
          age_15_64_years: 0.637,
          age_above_65_years: 0.05,
        },
        {
          country: "Guatemala",
          age_0_14_years: 0.351,
          age_15_64_years: 0.603,
          age_above_65_years: 0.05,
        },
        {
          country: "Brunei",
          age_0_14_years: 0.23,
          age_15_64_years: 0.724,
          age_above_65_years: 0.05,
        },
        {
          country: "Lesotho",
          age_0_14_years: 0.354,
          age_15_64_years: 0.601,
          age_above_65_years: 0.05,
        },
        {
          country: "Cape Verde",
          age_0_14_years: 0.302,
          age_15_64_years: 0.653,
          age_above_65_years: 0.05,
        },
        {
          country: "Kyrgyzstan",
          age_0_14_years: 0.318,
          age_15_64_years: 0.637,
          age_above_65_years: 0.05,
        },
        {
          country: "Pakistan",
          age_0_14_years: 0.348,
          age_15_64_years: 0.607,
          age_above_65_years: 0.05,
        },
        {
          country: "Gabon",
          age_0_14_years: 0.359,
          age_15_64_years: 0.596,
          age_above_65_years: 0.05,
        },
        {
          country: "Uzbekistan",
          age_0_14_years: 0.28,
          age_15_64_years: 0.675,
          age_above_65_years: 0.05,
        },
        {
          country: "Libya",
          age_0_14_years: 0.282,
          age_15_64_years: 0.674,
          age_above_65_years: 0.04,
        },
        {
          country: "Cambodia",
          age_0_14_years: 0.313,
          age_15_64_years: 0.643,
          age_above_65_years: 0.04,
        },
        {
          country: "Vanuatu",
          age_0_14_years: 0.36,
          age_15_64_years: 0.597,
          age_above_65_years: 0.04,
        },
        {
          country: "Turkmenistan",
          age_0_14_years: 0.309,
          age_15_64_years: 0.648,
          age_above_65_years: 0.04,
        },
        {
          country: "Syria",
          age_0_14_years: 0.366,
          age_15_64_years: 0.591,
          age_above_65_years: 0.04,
        },
        {
          country: "Djibouti",
          age_0_14_years: 0.311,
          age_15_64_years: 0.647,
          age_above_65_years: 0.04,
        },
        {
          country: "Maldives",
          age_0_14_years: 0.234,
          age_15_64_years: 0.725,
          age_above_65_years: 0.04,
        },
        {
          country: "Laos",
          age_0_14_years: 0.329,
          age_15_64_years: 0.631,
          age_above_65_years: 0.04,
        },
        {
          country: "Mongolia",
          age_0_14_years: 0.297,
          age_15_64_years: 0.663,
          age_above_65_years: 0.04,
        },
        {
          country: "Botswana",
          age_0_14_years: 0.314,
          age_15_64_years: 0.647,
          age_above_65_years: 0.04,
        },
        {
          country: "Belize",
          age_0_14_years: 0.314,
          age_15_64_years: 0.647,
          age_above_65_years: 0.04,
        },
        {
          country: "Jordan",
          age_0_14_years: 0.355,
          age_15_64_years: 0.607,
          age_above_65_years: 0.04,
        },
        {
          country: "Papua New Guinea",
          age_0_14_years: 0.359,
          age_15_64_years: 0.603,
          age_above_65_years: 0.04,
        },
        {
          country: "Central African Republic",
          age_0_14_years: 0.432,
          age_15_64_years: 0.531,
          age_above_65_years: 0.04,
        },
        {
          country: "Timor-Leste",
          age_0_14_years: 0.436,
          age_15_64_years: 0.528,
          age_above_65_years: 0.04,
        },
        {
          country: "Namibia",
          age_0_14_years: 0.367,
          age_15_64_years: 0.598,
          age_above_65_years: 0.04,
        },
        {
          country: "Eritrea",
          age_0_14_years: 0.418,
          age_15_64_years: 0.546,
          age_above_65_years: 0.04,
        },
        {
          country: "Sudan",
          age_0_14_years: 0.408,
          age_15_64_years: 0.556,
          age_above_65_years: 0.04,
        },
        {
          country: "Ethiopia",
          age_0_14_years: 0.406,
          age_15_64_years: 0.559,
          age_above_65_years: 0.04,
        },
        {
          country: "Tajikistan",
          age_0_14_years: 0.353,
          age_15_64_years: 0.613,
          age_above_65_years: 0.04,
        },
        {
          country: "Solomon Islands",
          age_0_14_years: 0.388,
          age_15_64_years: 0.577,
          age_above_65_years: 0.04,
        },
        {
          country: "Republic of the Congo",
          age_0_14_years: 0.423,
          age_15_64_years: 0.543,
          age_above_65_years: 0.03,
        },
        {
          country: "South Sudan",
          age_0_14_years: 0.417,
          age_15_64_years: 0.549,
          age_above_65_years: 0.03,
        },
        {
          country: "Ghana",
          age_0_14_years: 0.385,
          age_15_64_years: 0.581,
          age_above_65_years: 0.03,
        },
        {
          country: "Saudi Arabia",
          age_0_14_years: 0.252,
          age_15_64_years: 0.715,
          age_above_65_years: 0.03,
        },
        {
          country: "Eswatini (Swaziland)",
          age_0_14_years: 0.372,
          age_15_64_years: 0.597,
          age_above_65_years: 0.03,
        },
        {
          country: "Cameroon",
          age_0_14_years: 0.427,
          age_15_64_years: 0.541,
          age_above_65_years: 0.03,
        },
        {
          country: "Benin",
          age_0_14_years: 0.427,
          age_15_64_years: 0.541,
          age_above_65_years: 0.03,
        },
        {
          country: "Iraq",
          age_0_14_years: 0.404,
          age_15_64_years: 0.564,
          age_above_65_years: 0.03,
        },
        {
          country: "Mozambique",
          age_0_14_years: 0.448,
          age_15_64_years: 0.521,
          age_above_65_years: 0.03,
        },
        {
          country: "Liberia",
          age_0_14_years: 0.418,
          age_15_64_years: 0.551,
          age_above_65_years: 0.03,
        },
        {
          country: "Tanzania",
          age_0_14_years: 0.449,
          age_15_64_years: 0.52,
          age_above_65_years: 0.03,
        },
        {
          country: "Mauritania",
          age_0_14_years: 0.399,
          age_15_64_years: 0.569,
          age_above_65_years: 0.03,
        },
        {
          country: "Guinea",
          age_0_14_years: 0.423,
          age_15_64_years: 0.546,
          age_above_65_years: 0.03,
        },
        {
          country: "Palestine",
          age_0_14_years: 0.396,
          age_15_64_years: 0.574,
          age_above_65_years: 0.03,
        },
        {
          country: "Senegal",
          age_0_14_years: 0.429,
          age_15_64_years: 0.541,
          age_above_65_years: 0.03,
        },
        {
          country: "Malawi",
          age_0_14_years: 0.44,
          age_15_64_years: 0.53,
          age_above_65_years: 0.03,
        },
        {
          country: "Rwanda",
          age_0_14_years: 0.401,
          age_15_64_years: 0.569,
          age_above_65_years: 0.03,
        },
        {
          country: "Democratic Republic of the Congo",
          age_0_14_years: 0.463,
          age_15_64_years: 0.507,
          age_above_65_years: 0.03,
        },
        {
          country: "Comoros",
          age_0_14_years: 0.398,
          age_15_64_years: 0.573,
          age_above_65_years: 0.03,
        },
        {
          country: "Guinea-Bissau",
          age_0_14_years: 0.407,
          age_15_64_years: 0.555,
          age_above_65_years: 0.03,
        },
        {
          country: "Ivory Coast",
          age_0_14_years: 0.424,
          age_15_64_years: 0.546,
          age_above_65_years: 0.03,
        },
        {
          country: "Madagascar",
          age_0_14_years: 0.41,
          age_15_64_years: 0.561,
          age_above_65_years: 0.03,
        },
        {
          country: "São Tomé and Príncipe",
          age_0_14_years: 0.428,
          age_15_64_years: 0.543,
          age_above_65_years: 0.03,
        },
        {
          country: "Yemen",
          age_0_14_years: 0.399,
          age_15_64_years: 0.572,
          age_above_65_years: 0.03,
        },
        {
          country: "Togo",
          age_0_14_years: 0.416,
          age_15_64_years: 0.556,
          age_above_65_years: 0.03,
        },
        {
          country: "Zimbabwe",
          age_0_14_years: 0.412,
          age_15_64_years: 0.56,
          age_above_65_years: 0.03,
        },
        {
          country: "Nigeria",
          age_0_14_years: 0.44,
          age_15_64_years: 0.533,
          age_above_65_years: 0.03,
        },
        {
          country: "Equatorial Guinea",
          age_0_14_years: 0.372,
          age_15_64_years: 0.6,
          age_above_65_years: 0.03,
        },
        {
          country: "Kenya",
          age_0_14_years: 0.405,
          age_15_64_years: 0.568,
          age_above_65_years: 0.03,
        },
        {
          country: "Somalia",
          age_0_14_years: 0.464,
          age_15_64_years: 0.508,
          age_above_65_years: 0.03,
        },
        {
          country: "Afghanistan",
          age_0_14_years: 0.432,
          age_15_64_years: 0.542,
          age_above_65_years: 0.03,
        },
        {
          country: "Burundi",
          age_0_14_years: 0.45,
          age_15_64_years: 0.524,
          age_above_65_years: 0.03,
        },
        {
          country: "Niger",
          age_0_14_years: 0.502,
          age_15_64_years: 0.472,
          age_above_65_years: 0.03,
        },
        {
          country: "Chad",
          age_0_14_years: 0.471,
          age_15_64_years: 0.504,
          age_above_65_years: 0.03,
        },
        {
          country: "Sierra Leone",
          age_0_14_years: 0.421,
          age_15_64_years: 0.554,
          age_above_65_years: 0.03,
        },
        {
          country: "Zambia",
          age_0_14_years: 0.448,
          age_15_64_years: 0.527,
          age_above_65_years: 0.03,
        },
        {
          country: "Mali",
          age_0_14_years: 0.477,
          age_15_64_years: 0.498,
          age_above_65_years: 0.03,
        },
        {
          country: "Oman",
          age_0_14_years: 0.218,
          age_15_64_years: 0.758,
          age_above_65_years: 0.02,
        },
        {
          country: "Burkina Faso",
          age_0_14_years: 0.452,
          age_15_64_years: 0.524,
          age_above_65_years: 0.02,
        },
        {
          country: "Bahrain",
          age_0_14_years: 0.197,
          age_15_64_years: 0.779,
          age_above_65_years: 0.02,
        },
        {
          country: "Angola",
          age_0_14_years: 0.468,
          age_15_64_years: 0.508,
          age_above_65_years: 0.02,
        },
        {
          country: "Gambia",
          age_0_14_years: 0.453,
          age_15_64_years: 0.523,
          age_above_65_years: 0.02,
        },
        {
          country: "Kuwait",
          age_0_14_years: 0.211,
          age_15_64_years: 0.766,
          age_above_65_years: 0.02,
        },
        {
          country: "Uganda",
          age_0_14_years: 0.477,
          age_15_64_years: 0.501,
          age_above_65_years: 0.02,
        },
        {
          country: "Qatar",
          age_0_14_years: 0.139,
          age_15_64_years: 0.848,
          age_above_65_years: 0.01,
        },
        {
          country: "United Arab Emirates",
          age_0_14_years: 0.139,
          age_15_64_years: 0.85,
          age_above_65_years: 0.01,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("countries_age_structures", null, {});
  },
};
