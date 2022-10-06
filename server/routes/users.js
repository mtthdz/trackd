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
 * 4. Upon verification, Mongo will look for user with Firebase uid
 * 5. if user exists, Mongo will send user document (as object) back to client
 *    else if user does not exist, Mongo will create a new user document and send back to client
 */
userRoutes.post('/auth', async (req, res) => {
  let token = req.body.token;

  try {
    let decodedToken = await admin.auth().verifyIdToken(token);
    let user = await User.findOne({ uid: decodedToken.uid });

    if(user) {
      res.json(user);

    } else {
      let newUser = new User({ name: decodedToken.name, email: decodedToken.email, uid: decodedToken.uid });
      let user = await newUser.save();
      res.json(user);

    }
  } catch(err) {
    res.status(400).send(err);
  }
});


module.exports = userRoutes;