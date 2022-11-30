const express = require('express');
let dotenv = require('dotenv');
dotenv.config();
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const Sequelize = require('./util/database');

app.use(bodyParser.json());
app.use('/users', userRoutes);

Sequelize.sync().then(result =>{
    console.log('Server synced Successfully')
    app.listen(3000);
}).catch(err => console.log(err));
