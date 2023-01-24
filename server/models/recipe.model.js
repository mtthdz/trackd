const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const macroSchema = new Schema({
    protein: {
        type: Number,
        required: true,
    },
    carbohydrates: {
        type: Number,
        required: true,
    },
    fats: {
        type: Number,
        required: true,
    },
})

const recipeSchema = new Schema({
    uid: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    macros: {
        type: macroSchema,
        required: true,
    },
})

const Recipe = mongoose.model('Recipe', recipeSchema );
module.exports = Recipe;