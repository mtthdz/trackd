const express = require('express');
const User = require("../models/user.model");

const userRoutes = express.Router();

// find all users
userRoutes.route('/').get((req, res) => {
  User.find({}, function(err, users) {
    if(err) {
      console.log(err);
    } else {
      res.json(users);
    }
  })
})

// find user via firebase uid
// if user does not exist, create new user
// regardless, return user body
userRoutes.route('/find').post(async (req, res) => {
  let uid = req.body.uid;
  let user = await User.findOne({uid: uid});

  if(user) {
    res.json(user);
  } else {
    let newUser = new User(req.body);

    newUser.save()
    .then(newUser => {
      res.status(200).json(newUser);
    })
    .catch(err => {
      res.status(400).send('adding new user failed');
    });
  }
})

module.exports = userRoutes;