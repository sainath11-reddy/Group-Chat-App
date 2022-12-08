const message = require('../models/message');
const { Op } = require("sequelize");

exports.postMessage = (req, res, next) =>{
    const user = req.user;
    message.create({message:req.body.message,userName:req.user.name, UserId:req.user.id}).then(result =>{
        console.log(result);
        res.json({'success':true});
    }).catch(err => console.log(err));
}

exports.getMessages = (req, res, next)=>{
    const lastPageId = req.query.lastPageId;
    if(!lastPageId){
        lastPageId = -1;
    }
    message.findAll(
        {where:{ 
            messageId:{[Op.gt]:lastPageId}}}).then(result =>{
        // const name = result['']
        console.log(result);
        res.json(result);
    }).catch(err => console.log(err))
}