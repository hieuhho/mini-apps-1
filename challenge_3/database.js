var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkout', { useNewUrlParser: true });



let userDataSchema = mongoose.Schema({
  checkoutID: {type: Number, unique: true},
  name: String,
  email: String,
  password: String,
  addressOne: String,
  addressTwo: String,
  city: String,
  state: String,
  zipCode: Number,
  phone: Number,
  creditCard: Number,
  expiration: Number,
  CVV: Number,
  billingZip: Number
});

let UserData = mongoose.model('UserData', userDataSchema);

let newCheckout = (form) => {
  let newCheckout = new UserData({
    checkoutID: form.checkoutID
  })
  newCheckout.save((err, doc) => {
    if (err) {
      return console.error('CHECK OUT ERROR', err.message)
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

  UserData.updateOne({ checkoutID: `${form.checkoutID}`}, formOne, (err, doc) => {
    if (err) {
      return console.error('SAVE FORM ONE ERROR', err.message)
    } else {
      return console.log('Form One Submitted!')
    }
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

  UserData.updateOne({ checkoutID: `${form.checkoutID}`}, formTwo, (err, doc) => {
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

  UserData.updateOne({ checkoutID: `${form.checkoutID}`}, formThree, (err, doc) => {
    if (err) {
      return console.error('SAVE FORM THREE ERROR', err.message)
    }
    console.log('Form Three Submitted!')
  })
};

let find = (form) => {
  return UserData.find({
    checkoutID: `${form.checkoutID}`
  });
}

module.exports.newCheckout = newCheckout;
module.exports.saveOne = saveOne;
module.exports.saveTwo = saveTwo;
module.exports.saveThree = saveThree;
module.exports.find = find;