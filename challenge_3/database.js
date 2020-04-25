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

let saveOne = (form) => {
  let formOne = new FormOne({
    name: form.name,
    email: form.email,
    password: form.password
  });

  formOne.save((err, doc) => {
    if (err) {
      return console.error('SAVE FORM ONE ERROR', err.message)
    }
    console.log('Form One Submitted!')
  })
};

let saveTwo = (form) => {
  let formTwo = new FormTwo({
    addressOne: form.addressOne,
    addressTwo: form.addressTwo,
    city: form.city,
    state: form.state,
    zipCode: form.zip,
    phone: form.phone
  });

  formTwo.save((err, doc) => {
    if (err) {
      return console.error('SAVE FORM TWO ERROR', err.message)
    }
    console.log('Form Two Submitted!')
  })
};

let saveThree = (form) => {
  let formThree = new FormThree({
    creditCard: form.creditCard,
    expiration: form.expiration,
    CVV: form.CVV,
    billingZip: form.billingZip
  });

  formThree.save((err, doc) => {
    if (err) {
      return console.error('SAVE FORM THREE ERROR', err.message)
    }
    console.log('Form Three Submitted!')
  })
};

module.exports.saveOne = saveOne;
module.exports.saveTwo = saveTwo;
module.exports.saveThree = saveThree;
