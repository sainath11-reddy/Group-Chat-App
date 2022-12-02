const sequelize = require('sequelize');
const Sequelize = require('../util/database');

const messages = Sequelize.define('message',{
    messageId:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    userName:{
        type:sequelize.STRING,
        allowNull:false
    },
    message:{
        type:sequelize.STRING,
        allowNull:false
    }
})

module.exports = messages