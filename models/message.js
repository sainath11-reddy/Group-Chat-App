const sequelize = require('sequelize');
const Sequelize = require('../util/database');

const messages = Sequelize.define('message',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    message:{
        type:sequelize.STRING,
        allowNull:false
    }
})

module.exports = messages