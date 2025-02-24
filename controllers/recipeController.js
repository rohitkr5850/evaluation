const Recipe = require("../models/Recipe");
exports.addRecipe = async (req , res) => {

    try {
        const {title,ingredients,instructions, author} = req.body;

        const newRecipe = new Recipe({title,ingredients,instructions, author});
        await newRecipe.save();

        res.status(201).json({message:"Recipe added successfully",recipe:newRecipe});
    } catch(err){
        res.status(500).json({error:err.message});
    }
};
exports.getAllRecipes = async (req,res) => {
    try {
        const recipes = await
        Recipe.find();
        res.json(recipes);
    } catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.getRecipeById = async (req,res) => {
    try {

const recipe = await
Recipe.findById(req.params.id);
if(!recipe){
    return
    res.status(404).json({message : "Recipe not found"});
}
  recipe.views += 1;
  await recipe.save();

  res.json(recipe);
    } catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.updateRecipe = async(req,res) => {
    try {
        const {title,ingredients,instructions} = req.body;

        const updatedRecipe = await
        Recipe.findByIdAndUpdate(
            req.params.id,{title,ingredients,instructions},
            {new : true}
        );
        if(!updatedRecipe){
            return
            res.status(404).json({message:"Recipe not found"});
        }
        res.json({message:"Recipe updated successfully",recipe:updatedRecipe});
    } catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.deleteRecipe = async(req,res) => {
    try {
        const {title,ingredients,instructions} = req.body;

        const deletedRecipe = await
        Recipe.findByIdAndDelete(
            req.params.id
        );
        if(!deletedRecipe){
            return
            res.status(404).json({message:"Recipe not found"});
        }
        res.json({message:"Recipe deleted successfully"});
    } catch(err){
        res.status(500).json({error:err.message});
    }
};

