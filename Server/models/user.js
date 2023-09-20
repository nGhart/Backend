const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  number1: {
    type: String,
    required: true,
  },
  number2: {
    type: String,
    required: false,
  },
  building: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pobox: {
    type: String,
    required: false,
  },
  letterhead: {
    type: String,
    required: true,
    default:
      'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
  },
  //you can add multiple schemas
  animals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' }],
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
