const sequelize = require('sequelize');
// const { use } = require('../routes/users');
const Sequelize = require('../util/database');

const users = Sequelize.define('Users',{
    id:{
        type:sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
    email:{
        type:sequelize.STRING,
        allowNull:false,
        unique:true
    },
    phoneNumber:{
        type:sequelize.STRING,
        allowNull:false
    },
    password:{
        type:sequelize.STRING,
        allowNull:false
    }
})

module.exports = users