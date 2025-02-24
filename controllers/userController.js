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
           Recipe.find({author:req.params.userId});
           const totalViews = recipes.reduce((sum , recipe) => sum + recipe.views, 0);
           res.json({totalViews});
        }catch(err){
            res.status(500).json({error:err.message});
        }
    };
    exports.getUserTopRecipe = async(req ,res) => 
        {
            try {
                const recipes = await
               Recipe.findOne({author:req.params.userId});
               const totalViews = recipes.sort("-views");
               res.json({recipe});
            }catch(err){
                res.status(500).json({error:err.message});
            }
        };
