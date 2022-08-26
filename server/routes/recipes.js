const express = require("express");
const Recipe = require("../models/recipe.model");

const recipeRoutes = express.Router();

recipeRoutes.route("/").get(function(req, res) {
    Recipe.find({}, function(error, recipes) {
        if(error) {
            console.log(error);
        } else {
            res.json(recipes);
        }
    })
});

recipeRoutes.route("/add").post(function(req, res){
    let newRecipe = new Recipe(req.body);

    newRecipe.save().then(newRecipe => {
        res.status(200).json({"newRecipe":"recipe has been saved"});
    }).catch(error =>{
        res.status(400).send("your recipe did not save");
    });
});
module.exports = recipeRoutes;