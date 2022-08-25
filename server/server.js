const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// temp
const User = require("./models/user.model");
const userRoutes = express.Router();

const app = express();
const port = process.env.PORT || 8000;
const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;

app.use(cors());
app.use(express.json());
mongoose.connect(uri)
connection.once('open', () => {
  console.log('connection to MongoDB database established successfully.');
})
app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});


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

app.use('/users', userRoutes);