const express = require('express');
const User = require("../models/user.model");
var admin = require("firebase-admin");
var serviceAccount = require("../trackd-180d9-firebase-adminsdk-fikoi-d82e7c8cf3.json");

// Firebase Admin initialize
// TODO: remove json from project dir
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

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

/**
 * Firebase Auth
 * 1. (front end) user follows login via firebase auth
 * 2. (front end) user receives idToken, sends here via fetch
 * 3. Mongo server will verify idToken with Firebase server
 *    - on success, decodedtoken returns Firebase user
 *    - at this point, user has been verified
 *    - the reason for this is to have Mongo and Firebase servers talk, keeping
 *      front end completely disengaged (OAuth2.0 protocol)
 * 
 * TODO: merge /find to complete getting userdata to front end
 */
userRoutes.route('/auth').post(async (req, res) => {
  let token = req.body.token;

  admin.auth()
  .verifyIdToken(token)
  .then((decodedToken) => {
    const uid = decodedToken.uid;
    res.status(200).json(uid);
  })
  .catch((error) => {
    res.status(400).send(token);
  });
})


// TODO: merge into /auth endpoint
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