const express = require('express');
const User = require("../models/user.model");

const userRoutes = express.Router();

// find all users
userRoutes.route('/').get(function(req, res) {
  User.find({}, function(err, users) {
    if(err) {
      console.log(err);
    } else {
      res.json(users);
    }
  })
});


// find user by firebase uid
userRoutes.route('/:uid').get(function(req, res) {
  let uid = req.params.uid;

  User.findOne({uid: uid}, function(error, user) {
    if(error) {
      res.status(400).send('adding new user failed');

    } else if(user) {
      res.status(200).json('user exists');
    } else {
      res.status(202).json('user does not exist');
    }
  });
})


// create user
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