var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkout');

let formOneSchema = mongoose.Schema({
  name: String,
  email: {type: String, unique: true},
  password: String
});
let formTwoSchema = mongoose.Schema({
  addressOne: {type: String, unique: true},
  addressTwo: String,
  city: String,
  state: String,
  zipCode: Number,
  phone: Number
});
let formThreeSchema = mongoose.Schema({
  creditCard: {type: Number, unique: true},
  expiration: Number,
  CVV: Number,
  billingZip: Number
});

let userDataSchema = mongoose.Schema({
  checkoutID: {type: Number, unique: true},
  name: String,
  email: {type: String, unique: true},
  password: String,
  addressOne: {type: String, unique: true},
  addressTwo: String,
  city: String,
  state: String,
  zipCode: Number,
  phone: Number,
  creditCard: {type: Number, unique: true},
  expiration: Number,
  CVV: Number,
  billingZip: Number
});

let FormOne = mongoose.model('FormOne', formOneSchema);
let FormTwo = mongoose.model('FormTwo', formTwoSchema);
let FormThree = mongoose.model('FormThree', formThreeSchema);
let UserData = mongoose.model('UserData', userDataSchema);

let newCheckout = (form) => {
  let newCheckout = new UserData({
    checkoutID: form.checkoutID
  })
  newCheckout.save((err, doc) => {
    if (err) {
      return console.error('SAVE FORM ONE ERROR', err.message)
    }
    console.log('Checking Out!')
  })
};

let saveOne = (form) => {
  let formOne = {
    name: form.name,
    email: form.email,
    password: form.password
  };

  UserData.update({ checkoutID: `${form.checkoutID}`}, formOne, (err, doc) => {
    if (err) {
      return console.error('SAVE FORM ONE ERROR', err.message)
    }
    console.log('Form One Submitted!')
  })
};

let saveTwo = (form) => {
  let formTwo = {
    addressOne: form.addressOne,
    addressTwo: form.addressTwo,
    city: form.city,
    state: form.state,
    zipCode: form.zip,
    phone: form.phone
  };

  UserData.update({ checkoutID: `${form.checkoutID}`}, formTwo, (err, doc) => {
    if (err) {
      return console.error('SAVE FORM TWO ERROR', err.message)
    }
    console.log('Form Two Submitted!')
  })
};

let saveThree = (form) => {
  let formThree = {
    creditCard: form.creditCard,
    expiration: form.expiration,
    CVV: form.CVV,
    billingZip: form.billingZip
  };

  UserData.update({ checkoutID: `${form.checkoutID}`}, formThree, (err, doc) => {
    if (err) {
      return console.error('SAVE FORM THREE ERROR', err.message)
    }
    console.log('Form Three Submitted!')
  })
};

module.exports.saveOne = saveOne;
module.exports.saveTwo = saveTwo;
module.exports.saveThree = saveThree;
