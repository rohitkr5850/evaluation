const mongoose = require("mongoose");

const ArchivedRecipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    ingredients: [String],
    instructions: String,
    author : { type : mongoose.Schema.Types.ObjectId, ref:"User" },
    views : Number,
    createdAt: Date,
    archivedAt : { type : Date, default : Date.now},
});

module.exports = mongoose.model("ArchivedRecipe",ArchivedRecipeSchema);