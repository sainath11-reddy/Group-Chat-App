const jwt = require('jsonwebtoken');
const users = require('../models/user');

exports.authenticate = (req, res, next) => {
    try{
        const token = req.header('Authorization');
        const user = jwt.verify(token,process.env.SECRET_KEY);
        users.findByPk(user.userId).then(result =>{
            if(result){
                req.user = result;
                next();
            }
            else{
                throw new Error();
            }
            
        })
    }
    catch(err){
        return res.status(401).json({"success":false});
    }
}

