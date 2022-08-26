const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
        required: true,
    }, 
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;