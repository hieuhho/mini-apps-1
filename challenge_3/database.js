var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkout');

let formOneSchema = mongoose.Schema({
  name: String,
  email: {type: String, unique: true},
  password: String
});
let formTwoSchema = mongoose.Schema({
  addressOne: String,
  addressTwo: String,
  city: String,
  state: String,
  zipCode: Number,
  phone: Number
});
let formThreeSchema = mongoose.Schema({
  creditCard: Number,
  expiration: Number,
  CVV: Number,
  billingZip: Number
});

let FormOne = mongoose.model('FormOne', formOneSchema);
let FormTwo = mongoose.model('FormTwo', formTwoSchema);
let FormThree = mongoose.model('FormThree', formThreeSchema);

