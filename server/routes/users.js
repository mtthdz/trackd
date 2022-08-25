const express = require('express');
const User = require("../models/user.model");

const userRoutes = express.Router();

// read
userRoutes.route('/').get(function(req, res) {
  User.find({}, function(err, users) {
    if(err) {
      console.log(err);
    } else {
      res.json(users);
    }
  })
});

// create
userRoutes.route('/add').post(function(req, res) {
  let newUser = new User(req.body);

  newUser.save()
    .then(newUser => {
      res.status(200).json({'newUser': 'new user has been saved.'});
    })
    .catch(err => {
      res.status(400).send('adding new user failed');
    });
});

module.exports = userRoutes;