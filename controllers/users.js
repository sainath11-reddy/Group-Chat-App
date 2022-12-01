const User = require('../models/user');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
exports.postSignup = (req,res,next)=>{
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
        else{
            console.log(err)
        }
    })
    
}

function generateAccessToken(user){
    return jwt.sign({userId:user.id, name:user.name},process.env.SECRET_KEY);
}

exports.postLogin = (req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password
    User.findOne({where:{email:email}}).then(user =>{
        if(user){
            bcrypt.compare(password, user.password,(err, result)=>{
                if(err){
                    res.status(500).json({message:err, success:false})
                }
                if(result == true){
                    res.status(200).json({success:true, message:"User logged in Successfully", token:generateAccessToken(user)});
                }
                else{
                    res.status(401).json({success:false, message:"Password is incorrect"});
                }
            })
        }
        else{
            res.status(404).json({success:false});
        }
    }).catch(err => console.log(err))
}

