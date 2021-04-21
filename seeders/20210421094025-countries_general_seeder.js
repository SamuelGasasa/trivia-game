"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "countries_general",
      [
        {
          country: "Afghanistan",
          literacy: 360,
          phones: 32,
          birthrate: 466,
        },
        {
          country: "Albania",
          literacy: 865,
          phones: 712,
          birthrate: 1511,
        },
        {
          country: "Algeria",
          literacy: 700,
          phones: 781,
          birthrate: 1714,
        },
        {
          country: "American Samoa",
          literacy: 970,
          phones: 2595,
          birthrate: 2246,
        },
        {
          country: "Andorra",
          literacy: 1000,
          phones: 4972,
          birthrate: 871,
        },
        {
          country: "Angola",
          literacy: 420,
          phones: 78,
          birthrate: 4511,
        },
        {
          country: "Anguilla",
          literacy: 950,
          phones: 4600,
          birthrate: 1417,
        },
        {
          country: "Antigua & Barbuda",
          literacy: 890,
          phones: 5499,
          birthrate: 1693,
        },
        {
          country: "Argentina",
          literacy: 971,
          phones: 2204,
          birthrate: 1673,
        },
        {
          country: "Armenia",
          literacy: 986,
          phones: 1957,
          birthrate: 1207,
        },
        {
          country: "Aruba",
          literacy: 970,
          phones: 5161,
          birthrate: 1103,
        },
        {
          country: "Australia",
          literacy: 1000,
          phones: 5655,
          birthrate: 1214,
        },
        {
          country: "Austria",
          literacy: 980,
          phones: 4522,
          birthrate: 874,
        },
        {
          country: "Azerbaijan",
          literacy: 970,
          phones: 1371,
          birthrate: 2074,
        },
        {
          country: "Bahamas, The",
          literacy: 956,
          phones: 4606,
          birthrate: 1757,
        },
        {
          country: "Bahrain",
          literacy: 891,
          phones: 2813,
          birthrate: 178,
        },
        {
          country: "Bangladesh",
          literacy: 431,
          phones: 73,
          birthrate: 298,
        },
        {
          country: "Barbados",
          literacy: 974,
          phones: 4819,
          birthrate: 1271,
        },
        {
          country: "Belarus",
          literacy: 996,
          phones: 3191,
          birthrate: 1116,
        },
        {
          country: "Belgium",
          literacy: 980,
          phones: 4626,
          birthrate: 1038,
        },
        {
          country: "Belize",
          literacy: 941,
          phones: 1157,
          birthrate: 2884,
        },
        {
          country: "Benin",
          literacy: 409,
          phones: 97,
          birthrate: 3885,
        },
        {
          country: "Bermuda",
          literacy: 980,
          phones: 8514,
          birthrate: 114,
        },
        {
          country: "Bhutan",
          literacy: 422,
          phones: 143,
          birthrate: 3365,
        },
        {
          country: "Bolivia",
          literacy: 872,
          phones: 719,
          birthrate: 233,
        },
        {
          country: "Bosnia & Herzegovina",
          literacy: "",
          phones: 2154,
          birthrate: 877,
        },
        {
          country: "Botswana",
          literacy: 798,
          phones: 805,
          birthrate: 2308,
        },
        {
          country: "Brazil",
          literacy: 864,
          phones: 2253,
          birthrate: 1656,
        },
        {
          country: "British Virgin Is.",
          literacy: 978,
          phones: 5065,
          birthrate: 1489,
        },
        {
          country: "Brunei",
          literacy: 939,
          phones: 2372,
          birthrate: 1879,
        },
        {
          country: "Bulgaria",
          literacy: 986,
          phones: 3363,
          birthrate: 965,
        },
        {
          country: "Burkina Faso",
          literacy: 266,
          phones: 70,
          birthrate: 4562,
        },
        {
          country: "Burma",
          literacy: 853,
          phones: 101,
          birthrate: 1791,
        },
        {
          country: "Burundi",
          literacy: 516,
          phones: 34,
          birthrate: 4222,
        },
        {
          country: "Cambodia",
          literacy: 694,
          phones: 26,
          birthrate: 269,
        },
        {
          country: "Cameroon",
          literacy: 790,
          phones: 57,
          birthrate: 3389,
        },
        {
          country: "Canada",
          literacy: 970,
          phones: 5522,
          birthrate: 1078,
        },
        {
          country: "Cape Verde",
          literacy: 766,
          phones: 1696,
          birthrate: 2487,
        },
        {
          country: "Cayman Islands",
          literacy: 980,
          phones: 8363,
          birthrate: 1274,
        },
        {
          country: "Central African Rep.",
          literacy: 510,
          phones: 23,
          birthrate: 3391,
        },
        {
          country: "Chad",
          literacy: 475,
          phones: 13,
          birthrate: 4573,
        },
        {
          country: "Chile",
          literacy: 962,
          phones: 2130,
          birthrate: 1523,
        },
        {
          country: "China",
          literacy: 909,
          phones: 2667,
          birthrate: 1325,
        },
        {
          country: "Colombia",
          literacy: 925,
          phones: 1762,
          birthrate: 2048,
        },
        {
          country: "Comoros",
          literacy: 565,
          phones: 245,
          birthrate: 3693,
        },
        {
          country: "Congo, Dem. Rep.",
          literacy: 655,
          phones: 2,
          birthrate: 4369,
        },
        {
          country: "Congo, Repub. of the",
          literacy: 838,
          phones: 37,
          birthrate: 4257,
        },
        {
          country: "Cook Islands",
          literacy: 950,
          phones: 2899,
          birthrate: 21,
        },
        {
          country: "Costa Rica",
          literacy: 960,
          phones: 3407,
          birthrate: 1832,
        },
        {
          country: "Cote d'Ivoire",
          literacy: 509,
          phones: 146,
          birthrate: 3511,
        },
        {
          country: "Croatia",
          literacy: 985,
          phones: 4204,
          birthrate: 961,
        },
        {
          country: "Cuba",
          literacy: 970,
          phones: 747,
          birthrate: 1189,
        },
        {
          country: "Cyprus",
          literacy: 976,
          phones: "",
          birthrate: 1256,
        },
        {
          country: "Czech Republic",
          literacy: 999,
          phones: 3143,
          birthrate: 902,
        },
        {
          country: "Denmark",
          literacy: 1000,
          phones: 6146,
          birthrate: 1113,
        },
        {
          country: "Djibouti",
          literacy: 679,
          phones: 228,
          birthrate: 3953,
        },
        {
          country: "Dominica",
          literacy: 940,
          phones: 3048,
          birthrate: 1527,
        },
        {
          country: "Dominican Republic",
          literacy: 847,
          phones: 974,
          birthrate: 2322,
        },
        {
          country: "East Timor",
          literacy: 586,
          phones: "",
          birthrate: 2699,
        },
        {
          country: "Ecuador",
          literacy: 925,
          phones: 1256,
          birthrate: 2229,
        },
        {
          country: "Egypt",
          literacy: 577,
          phones: 1318,
          birthrate: 2294,
        },
        {
          country: "El Salvador",
          literacy: 802,
          phones: 1424,
          birthrate: 2661,
        },
        {
          country: "Equatorial Guinea",
          literacy: 857,
          phones: 185,
          birthrate: 3559,
        },
        {
          country: "Eritrea",
          literacy: 586,
          phones: 79,
          birthrate: 3433,
        },
        {
          country: "Estonia",
          literacy: 998,
          phones: 3338,
          birthrate: 1004,
        },
        {
          country: "Ethiopia",
          literacy: 427,
          phones: 82,
          birthrate: 3798,
        },
        {
          country: "Faroe Islands",
          literacy: "",
          phones: 5038,
          birthrate: 1405,
        },
        {
          country: "Fiji",
          literacy: 937,
          phones: 1126,
          birthrate: 2255,
        },
        {
          country: "Finland",
          literacy: 1000,
          phones: 4053,
          birthrate: 1045,
        },
        {
          country: "France",
          literacy: 990,
          phones: 5864,
          birthrate: 1199,
        },
        {
          country: "French Guiana",
          literacy: 830,
          phones: 2556,
          birthrate: 2046,
        },
        {
          country: "French Polynesia",
          literacy: 980,
          phones: 1945,
          birthrate: 1668,
        },
        {
          country: "Gabon",
          literacy: 632,
          phones: 274,
          birthrate: 3616,
        },
        {
          country: "Gambia, The",
          literacy: 401,
          phones: 268,
          birthrate: 3937,
        },
        {
          country: "Gaza Strip",
          literacy: "",
          phones: 2443,
          birthrate: 3945,
        },
        {
          country: "Georgia",
          literacy: 990,
          phones: 1466,
          birthrate: 1041,
        },
        {
          country: "Germany",
          literacy: 990,
          phones: 6679,
          birthrate: 825,
        },
        {
          country: "Ghana",
          literacy: 748,
          phones: 144,
          birthrate: 3052,
        },
        {
          country: "Gibraltar",
          literacy: "",
          phones: 8777,
          birthrate: 1074,
        },
        {
          country: "Greece",
          literacy: 975,
          phones: 5897,
          birthrate: 968,
        },
        {
          country: "Greenland",
          literacy: "",
          phones: 4489,
          birthrate: 1593,
        },
        {
          country: "Grenada",
          literacy: 980,
          phones: 3645,
          birthrate: 2208,
        },
        {
          country: "Guadeloupe",
          literacy: 900,
          phones: 4638,
          birthrate: 1505,
        },
        {
          country: "Guam",
          literacy: 990,
          phones: 4920,
          birthrate: 1879,
        },
        {
          country: "Guatemala",
          literacy: 706,
          phones: 921,
          birthrate: 2988,
        },
        {
          country: "Guernsey",
          literacy: "",
          phones: 8424,
          birthrate: 881,
        },
        {
          country: "Guinea",
          literacy: 359,
          phones: 27,
          birthrate: 4176,
        },
        {
          country: "Guinea-Bissau",
          literacy: 424,
          phones: 74,
          birthrate: 3722,
        },
        {
          country: "Guyana",
          literacy: 988,
          phones: 1435,
          birthrate: 1828,
        },
        {
          country: "Haiti",
          literacy: 529,
          phones: 169,
          birthrate: 3644,
        },
        {
          country: "Honduras",
          literacy: 762,
          phones: 675,
          birthrate: 2824,
        },
        {
          country: "Hong Kong",
          literacy: 935,
          phones: 5467,
          birthrate: 729,
        },
        {
          country: "Hungary",
          literacy: 994,
          phones: 3362,
          birthrate: 972,
        },
        {
          country: "Iceland",
          literacy: 999,
          phones: 6477,
          birthrate: 1364,
        },
        {
          country: "India",
          literacy: 595,
          phones: 454,
          birthrate: 2201,
        },
        {
          country: "Indonesia",
          literacy: 879,
          phones: 520,
          birthrate: 2034,
        },
        {
          country: "Iran",
          literacy: 794,
          phones: 2764,
          birthrate: 17,
        },
        {
          country: "Iraq",
          literacy: 404,
          phones: 386,
          birthrate: 3198,
        },
        {
          country: "Ireland",
          literacy: 980,
          phones: 5005,
          birthrate: 1445,
        },
        {
          country: "Isle of Man",
          literacy: "",
          phones: 6760,
          birthrate: 1105,
        },
        {
          country: "Israel",
          literacy: 954,
          phones: 4623,
          birthrate: 1797,
        },
        {
          country: "Italy",
          literacy: 986,
          phones: 4309,
          birthrate: 872,
        },
        {
          country: "Jamaica",
          literacy: 879,
          phones: 1240,
          birthrate: 2082,
        },
        {
          country: "Japan",
          literacy: 990,
          phones: 4612,
          birthrate: 937,
        },
        {
          country: "Jersey",
          literacy: "",
          phones: 8113,
          birthrate: 93,
        },
        {
          country: "Jordan",
          literacy: 913,
          phones: 1045,
          birthrate: 2125,
        },
        {
          country: "Kazakhstan",
          literacy: 984,
          phones: 1641,
          birthrate: 16,
        },
        {
          country: "Kenya",
          literacy: 851,
          phones: 81,
          birthrate: 3972,
        },
        {
          country: "Kiribati",
          literacy: "",
          phones: 427,
          birthrate: 3065,
        },
        {
          country: "Korea, North",
          literacy: 990,
          phones: 424,
          birthrate: 1554,
        },
        {
          country: "Korea, South",
          literacy: 979,
          phones: 4861,
          birthrate: 10,
        },
        {
          country: "Kuwait",
          literacy: 835,
          phones: 2110,
          birthrate: 2194,
        },
        {
          country: "Kyrgyzstan",
          literacy: 970,
          phones: 840,
          birthrate: 228,
        },
        {
          country: "Laos",
          literacy: 664,
          phones: 141,
          birthrate: 3549,
        },
        {
          country: "Latvia",
          literacy: 998,
          phones: 3214,
          birthrate: 924,
        },
        {
          country: "Lebanon",
          literacy: 874,
          phones: 2556,
          birthrate: 1852,
        },
        {
          country: "Lesotho",
          literacy: 848,
          phones: 237,
          birthrate: 2475,
        },
        {
          country: "Liberia",
          literacy: 575,
          phones: 23,
          birthrate: 4477,
        },
        {
          country: "Libya",
          literacy: 826,
          phones: 1271,
          birthrate: 2649,
        },
        {
          country: "Liechtenstein",
          literacy: 1000,
          phones: 5855,
          birthrate: 1021,
        },
        {
          country: "Lithuania",
          literacy: 996,
          phones: 2234,
          birthrate: 875,
        },
        {
          country: "Luxembourg",
          literacy: 1000,
          phones: 5154,
          birthrate: 1194,
        },
        {
          country: "Macau",
          literacy: 945,
          phones: 3849,
          birthrate: 848,
        },
        {
          country: "Macedonia",
          literacy: "",
          phones: 2600,
          birthrate: 1202,
        },
        {
          country: "Madagascar",
          literacy: 689,
          phones: 36,
          birthrate: 4141,
        },
        {
          country: "Malawi",
          literacy: 627,
          phones: 79,
          birthrate: 4313,
        },
        {
          country: "Malaysia",
          literacy: 887,
          phones: 1790,
          birthrate: 2286,
        },
        {
          country: "Maldives",
          literacy: 972,
          phones: 900,
          birthrate: 3481,
        },
        {
          country: "Mali",
          literacy: 464,
          phones: 64,
          birthrate: 4982,
        },
        {
          country: "Malta",
          literacy: 928,
          phones: 5050,
          birthrate: 1022,
        },
        {
          country: "Marshall Islands",
          literacy: 937,
          phones: 912,
          birthrate: 3305,
        },
        {
          country: "Martinique",
          literacy: 977,
          phones: 3944,
          birthrate: 1374,
        },
        {
          country: "Mauritania",
          literacy: 417,
          phones: 129,
          birthrate: 4099,
        },
        {
          country: "Mauritius",
          literacy: 856,
          phones: 2893,
          birthrate: 1543,
        },
        {
          country: "Mayotte",
          literacy: "",
          phones: 497,
          birthrate: 4095,
        },
        {
          country: "Mexico",
          literacy: 922,
          phones: 1816,
          birthrate: 2069,
        },
        {
          country: "Micronesia, Fed. St.",
          literacy: 890,
          phones: 1148,
          birthrate: 2468,
        },
        {
          country: "Moldova",
          literacy: 991,
          phones: 2081,
          birthrate: 157,
        },
        {
          country: "Monaco",
          literacy: 990,
          phones: 10356,
          birthrate: 919,
        },
        {
          country: "Mongolia",
          literacy: 978,
          phones: 551,
          birthrate: 2159,
        },
        {
          country: "Montserrat",
          literacy: 970,
          phones: "",
          birthrate: 1759,
        },
        {
          country: "Morocco",
          literacy: 517,
          phones: 404,
          birthrate: 2198,
        },
        {
          country: "Mozambique",
          literacy: 478,
          phones: 35,
          birthrate: 3518,
        },
        {
          country: "Namibia",
          literacy: 840,
          phones: 626,
          birthrate: 2432,
        },
        {
          country: "Nauru",
          literacy: "",
          phones: 1430,
          birthrate: 2476,
        },
        {
          country: "Nepal",
          literacy: 452,
          phones: 159,
          birthrate: 3098,
        },
        {
          country: "Netherlands",
          literacy: 990,
          phones: 4608,
          birthrate: 109,
        },
        {
          country: "Netherlands Antilles",
          literacy: 967,
          phones: 3653,
          birthrate: 1478,
        },
        {
          country: "New Caledonia",
          literacy: 910,
          phones: 2522,
          birthrate: 1811,
        },
        {
          country: "New Zealand",
          literacy: 990,
          phones: 4417,
          birthrate: 1376,
        },
        {
          country: "Nicaragua",
          literacy: 675,
          phones: 397,
          birthrate: 2451,
        },
        {
          country: "Niger",
          literacy: 176,
          phones: 19,
          birthrate: 5073,
        },
        {
          country: "Nigeria",
          literacy: 680,
          phones: 93,
          birthrate: 4043,
        },
        {
          country: "N. Mariana Islands",
          literacy: 970,
          phones: 2547,
          birthrate: 1943,
        },
        {
          country: "Norway",
          literacy: 1000,
          phones: 4617,
          birthrate: 1146,
        },
        {
          country: "Oman",
          literacy: 758,
          phones: 855,
          birthrate: 3624,
        },
        {
          country: "Pakistan",
          literacy: 457,
          phones: 318,
          birthrate: 2974,
        },
        {
          country: "Palau",
          literacy: 920,
          phones: 3256,
          birthrate: 1803,
        },
        {
          country: "Panama",
          literacy: 926,
          phones: 1379,
          birthrate: 2174,
        },
        {
          country: "Papua New Guinea",
          literacy: 646,
          phones: 109,
          birthrate: 2936,
        },
        {
          country: "Paraguay",
          literacy: 940,
          phones: 492,
          birthrate: 291,
        },
        {
          country: "Peru",
          literacy: 909,
          phones: 795,
          birthrate: 2048,
        },
        {
          country: "Philippines",
          literacy: 926,
          phones: 384,
          birthrate: 2489,
        },
        {
          country: "Poland",
          literacy: 998,
          phones: 3063,
          birthrate: 985,
        },
        {
          country: "Portugal",
          literacy: 933,
          phones: 3992,
          birthrate: 1072,
        },
        {
          country: "Puerto Rico",
          literacy: 941,
          phones: 2831,
          birthrate: 1277,
        },
        {
          country: "Qatar",
          literacy: 825,
          phones: 2320,
          birthrate: 1556,
        },
        {
          country: "Reunion",
          literacy: 889,
          phones: 3809,
          birthrate: 189,
        },
        {
          country: "Romania",
          literacy: 984,
          phones: 1969,
          birthrate: 107,
        },
        {
          country: "Russia",
          literacy: 996,
          phones: 2806,
          birthrate: 995,
        },
        {
          country: "Rwanda",
          literacy: 704,
          phones: 27,
          birthrate: 4037,
        },
        {
          country: "Saint Helena",
          literacy: 970,
          phones: 2933,
          birthrate: 1213,
        },
        {
          country: "Saint Kitts & Nevis",
          literacy: 970,
          phones: 6389,
          birthrate: 1802,
        },
        {
          country: "Saint Lucia",
          literacy: 670,
          phones: 3033,
          birthrate: 1968,
        },
        {
          country: "St Pierre & Miquelon",
          literacy: 990,
          phones: 6832,
          birthrate: 1352,
        },
        {
          country: "Saint Vincent and the Grenadines",
          literacy: 960,
          phones: 1909,
          birthrate: 1618,
        },
        {
          country: "Samoa",
          literacy: 997,
          phones: 752,
          birthrate: 1643,
        },
        {
          country: "San Marino",
          literacy: 960,
          phones: 7043,
          birthrate: 1002,
        },
        {
          country: "Sao Tome & Principe",
          literacy: 793,
          phones: 362,
          birthrate: 4025,
        },
        {
          country: "Saudi Arabia",
          literacy: 788,
          phones: 1406,
          birthrate: 2934,
        },
        {
          country: "Senegal",
          literacy: 402,
          phones: 222,
          birthrate: 3278,
        },
        {
          country: "Serbia",
          literacy: 930,
          phones: 2858,
          birthrate: "",
        },
        {
          country: "Seychelles",
          literacy: 580,
          phones: 2624,
          birthrate: 1603,
        },
        {
          country: "Sierra Leone",
          literacy: 314,
          phones: 40,
          birthrate: 4576,
        },
        {
          country: "Singapore",
          literacy: 925,
          phones: 4114,
          birthrate: 934,
        },
        {
          country: "Slovakia",
          literacy: "",
          phones: 2201,
          birthrate: 1065,
        },
        {
          country: "Slovenia",
          literacy: 997,
          phones: 4061,
          birthrate: 898,
        },
        {
          country: "Solomon Islands",
          literacy: "",
          phones: 134,
          birthrate: 3001,
        },
        {
          country: "Somalia",
          literacy: 378,
          phones: 113,
          birthrate: 4513,
        },
        {
          country: "South Africa",
          literacy: 864,
          phones: 1070,
          birthrate: 182,
        },
        {
          country: "Spain",
          literacy: 979,
          phones: 4535,
          birthrate: 1006,
        },
        {
          country: "Sri Lanka",
          literacy: 923,
          phones: 615,
          birthrate: 1551,
        },
        {
          country: "Sudan",
          literacy: 611,
          phones: 163,
          birthrate: 3453,
        },
        {
          country: "Suriname",
          literacy: 930,
          phones: 1847,
          birthrate: 1802,
        },
        {
          country: "Swaziland",
          literacy: 816,
          phones: 308,
          birthrate: 2741,
        },
        {
          country: "Sweden",
          literacy: 990,
          phones: 7150,
          birthrate: 1027,
        },
        {
          country: "Switzerland",
          literacy: 990,
          phones: 6809,
          birthrate: 971,
        },
        {
          country: "Syria",
          literacy: 769,
          phones: 1538,
          birthrate: 2776,
        },
        {
          country: "Taiwan",
          literacy: 961,
          phones: 5910,
          birthrate: 1256,
        },
        {
          country: "Tajikistan",
          literacy: 994,
          phones: 335,
          birthrate: 3265,
        },
        {
          country: "Tanzania",
          literacy: 782,
          phones: 40,
          birthrate: 3771,
        },
        {
          country: "Thailand",
          literacy: 926,
          phones: 1089,
          birthrate: 1387,
        },
        {
          country: "Togo",
          literacy: 609,
          phones: 106,
          birthrate: 3701,
        },
        {
          country: "Tonga",
          literacy: 985,
          phones: 977,
          birthrate: 2537,
        },
        {
          country: "Trinidad & Tobago",
          literacy: 986,
          phones: 3035,
          birthrate: 129,
        },
        {
          country: "Tunisia",
          literacy: 742,
          phones: 1236,
          birthrate: 1552,
        },
        {
          country: "Turkey",
          literacy: 865,
          phones: 2695,
          birthrate: 1662,
        },
        {
          country: "Turkmenistan",
          literacy: 980,
          phones: 746,
          birthrate: 2761,
        },
        {
          country: "Turks & Caicos Is",
          literacy: 980,
          phones: 2695,
          birthrate: 2184,
        },
        {
          country: "Tuvalu",
          literacy: "",
          phones: 593,
          birthrate: 2218,
        },
        {
          country: "Uganda",
          literacy: 699,
          phones: 36,
          birthrate: 4735,
        },
        {
          country: "Ukraine",
          literacy: 997,
          phones: 2599,
          birthrate: 882,
        },
        {
          country: "United Arab Emirates",
          literacy: 779,
          phones: 4753,
          birthrate: 1896,
        },
        {
          country: "United Kingdom",
          literacy: 990,
          phones: 5435,
          birthrate: 1071,
        },
        {
          country: "United States",
          literacy: 970,
          phones: 8980,
          birthrate: 1414,
        },
        {
          country: "Uruguay",
          literacy: 980,
          phones: 2914,
          birthrate: 1391,
        },
        {
          country: "Uzbekistan",
          literacy: 993,
          phones: 629,
          birthrate: 2636,
        },
        {
          country: "Vanuatu",
          literacy: 530,
          phones: 326,
          birthrate: 2272,
        },
        {
          country: "Venezuela",
          literacy: 934,
          phones: 1401,
          birthrate: 1871,
        },
        {
          country: "Vietnam",
          literacy: 903,
          phones: 1877,
          birthrate: 1686,
        },
        {
          country: "Virgin Islands",
          literacy: "",
          phones: 6528,
          birthrate: 1396,
        },
        {
          country: "Wallis and Futuna",
          literacy: 500,
          phones: 1186,
          birthrate: "",
        },
        {
          country: "West Bank",
          literacy: "",
          phones: 1452,
          birthrate: 3167,
        },
        {
          country: "Western Sahara",
          literacy: "",
          phones: "",
          birthrate: "",
        },
        {
          country: "Yemen",
          literacy: 502,
          phones: 372,
          birthrate: 4289,
        },
        {
          country: "Zambia",
          literacy: 806,
          phones: 82,
          birthrate: 41,
        },
        {
          country: "Zimbabwe",
          literacy: 907,
          phones: 268,
          birthrate: 2801,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("countries_general", null, {});
  },
};
