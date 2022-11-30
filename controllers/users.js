const User = require('../models/user');
const bcrypt =require('bcrypt');
exports.postUser = (req,res,next)=>{
    bcrypt.hash(req.body.password, 10, (err, hash)=>{
        if(!err){
            User.create({
                name:req.body.name,
                email:req.body.email, 
                phoneNumber:req.body.phoneNumber,
                password:hash
            }).then(result =>{
                    console.log('User entry added successfully');
                        res.send('Done')
            }).catch(err => {
                if(err.name === 'SequelizeUniqueConstraintError'){
                    res.status(409).json({"success":"false"});
                }
                
                console.log(err.name)
            });
        }
    })
    
}
