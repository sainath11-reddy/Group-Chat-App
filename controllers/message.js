const message = require('../models/message');

exports.postMessage = (req, res, next) =>{
    const user = req.user;
    message.create({message:req.body.message, UserId:req.user.id}).then(result =>{
        console.log(result);
    }).catch(err => console.log(err));
}

exports.getMessages = (req, res, next)=>{

}