const Recipe = require("../models/Recipe");
const ArchivedRecipe = require("../models/ArchivedRecipe");
const archiveRecipe = async (req , res , next) => {

try {
    const recipe = await
    Recipe.findById(req.params.recipeId);
    if(recipe) {
        await 
        ArchivedRecipe.create({ ...recipe.toObject(),archivedAt:new Date() });
        await
        Recipe.findByIdAndDelete(req.params.recipeId);
    }
    next();
} catch(err){
    res.status(500).json({ error : err.message });
}
};
module.exports = archiveRecipe;