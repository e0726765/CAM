const Sequelize = require("sequelize");
const db = require("../config/DBConfig");

// Create users table in MySQL Database
const Drug = db.define("cam", {
  camid: { type: Sequelize.STRING(10), primaryKey: true },
  cam: { type: Sequelize.STRING },
  acronym: { type: Sequelize.STRING },
  comm_name: { type: Sequelize.STRING },
  sci_name: { type: Sequelize.STRING },
  pinyin: { type: Sequelize.STRING },
  main_const: { type: Sequelize.STRING },
  other_const: { type: Sequelize.STRING },
  four_nature: { type: Sequelize.STRING },
  hotcold: { type: Sequelize.STRING },
  five_flavor: { type: Sequelize.STRING },
  nourish_property: { type: Sequelize.STRING },
  CAindication: { type: Sequelize.STRING },
  moaCAind: { type: Sequelize.STRING },
  otherindication: { type: Sequelize.STRING },
  adr: { type: Sequelize.STRING },
  proteinbinding: { type: Sequelize.STRING },
  metabolism: { type: Sequelize.STRING },
  elimination: { type: Sequelize.STRING },
  enz_substrate: { type: Sequelize.STRING },
  enz_inducer: { type: Sequelize.STRING },
  enz_inhibitor: { type: Sequelize.STRING },
  camurl: { type: Sequelize.TEXT },
  refherb: { type: Sequelize.TEXT },
  refadr: { type: Sequelize.TEXT },
  camdataupdated: { type: Sequelize.STRING },
});

module.exports = Drug;
