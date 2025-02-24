const express = require("express");
const {
    addRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipes,
    getRecipeById,
    getUserRecipes,
    incrementRecipeViews,
} = require("../controllers/recipeController");

const router = express.Router();

router.post("/add-recipe",addRecipe);
router.put("/update-recipe/:recipeId",updateRecipe);
router.delete("/delete-recipe/:recipeId",deleteRecipe);
router.get("/recipes",getRecipes);
router.get("/recipes/:recipeId",getRecipeById);
router.get("/user/recipes/:userId",getUserRecipes);
router.get("/recipes/view/:recipeId",incrementRecipeViews);

module.exports = router;