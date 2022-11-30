const sequelize = require('sequelize');
console.log(process.env.DB_NAME);
const Sequelize = new sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect:'mysql',
    host:process.env.DB_HOST
});

module.exports = Sequelize;