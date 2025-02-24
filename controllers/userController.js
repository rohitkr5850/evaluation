const User = require("../models/User");
const Recipe = require("../models/Recipe");

exports.adduser = async(req,res) => 
{
    try {
        const user = await
        User.create(req.body);
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};
exports.getUserViews = async(req ,res) => 
    {
        try {
            const recipes = await
           Recipe.find
        }catch(err){
            res.status(500).json({error:err.message});
        }
    };
    
