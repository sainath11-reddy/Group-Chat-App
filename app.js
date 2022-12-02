const express = require('express');
let dotenv = require('dotenv');
dotenv.config();
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const messageRoutes = require('./routes/message')
const Sequelize = require('./util/database');
const message = require('./models/message');
const user = require('./models/user');
const cors =require('cors');
app.use(cors({
    origin:"*"  
}))

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/message',messageRoutes);
user.hasMany(message);
message.belongsTo(user);
Sequelize.sync({}).then(result =>{
    console.log('Server synced Successfully')
    app.listen(3000);
}).catch(err => console.log(err));
