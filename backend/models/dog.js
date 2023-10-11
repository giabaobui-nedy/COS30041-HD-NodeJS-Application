const mongoose = require('mongoose');

// Define the Dog schema
const dogSchema = new mongoose.Schema({
  dogId: {
    type: Number,
    required: true,
    unique: true,
    autoIncrement: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 10,
  },
  breed: {
    type: String,
    required: true,
    maxlength: 30,
  },
  age: {
    type: Number,
    required: true,
  },
  characteristic: {
    type: String,
    maxlength: 30,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  isSold: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    maxlength: 1000,
  },
});

// Create the Dog model
const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
