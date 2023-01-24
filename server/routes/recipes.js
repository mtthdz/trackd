const express = require('express');
const Recipe = require('../models/recipe.model');

const recipeRoutes = express.Router();

// get recipes by uid
recipeRoutes.route('/').get( async (req, res) => {
    try {
        let uid = req.query.uid;
        let userRecipes = await Recipe.find({uid});
        res.json(userRecipes);

    } catch(err) {
        res.status(400).send(err);
    }
})

// save recipes by uid
recipeRoutes.route('/add').post( async (req, res) => {
    let uid = req.body.uid;
    let formEntry = req.body.recipe;

    try {
        let newRecipe = new Recipe({
            uid,
            name: formEntry.name,
            macros: {
                protein: formEntry.macros.protein,
                carbohydrates: formEntry.macros.carbohydrates,
                fats: formEntry.macros.fats
            }
        });

        let recipe = await newRecipe.save();
        res.json(recipe);
    } catch(err) {
        res.status(400).send(err);
    }
})

module.exports = recipeRoutes;