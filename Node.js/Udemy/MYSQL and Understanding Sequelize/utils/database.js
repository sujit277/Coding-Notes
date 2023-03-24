//MYSQL Connection without Sequelize

/* const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Test',
    password: 'Papa@7941',
})

module.exports = pool.promise(); */

const Sequelize = require('sequelize');
const sequelize = new Sequelize('Test', 'root', 'Papa@7941', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;