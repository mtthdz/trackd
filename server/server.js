const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const recipeRoutes = require('./routes/recipes');

require('dotenv').config();
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


app.get("/", (req, res) => {
  res.json({ message: "hello there" });
});

app.use('/users', userRoutes);
app.use('/recipes', recipeRoutes);