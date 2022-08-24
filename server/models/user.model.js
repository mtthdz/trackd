const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  metric: {
    type: Boolean,
    default: true,
  },
  tdee: {
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
    },
    weight: {
      type: Number,
      required: true,
      min: 0,
    },
    height: {
      type: Number,
      required: true,
      min: 0,
    },
    activity: {
      type: String,
      required: true,
    },
    goal: {
      type: String,
      required: true,
    },
    calculation:  {
      type: Number,
      required: true,
      min: 0,
    },
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
