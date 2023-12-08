const Sequelize = require("sequelize");
const sequelize = new Sequelize("Test", "root", "Papa@7941", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
