class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      checkoutID: Math.random(),
      formOne: {
        name: '',
        email: '',
        password: ''
      },
      formTwo: {
        addressOne: '',
        addressTwo: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
      },
      formThree: {
        creditCard: '',
        expiration: '',
        CVV: '',
        billingZip: ''
      },
      checkout: true,
      form1: false,
      form2: false,
      form3: false,
      confirm: false,
      purchased: false,
    }
  }

  handleChangeOne(propertyName, event) {
    const formOne = this.state.formOne;
    formOne[propertyName] = event.target.value;
    this.setState({
      formOne: formOne
    })
  };

  handleChangeTwo(propertyName, event) {
    const formTwo = this.state.formTwo;
    formTwo[propertyName] = event.target.value;
    this.setState({
      formTwo: formTwo
    })
  };

  handleChangeThree(propertyName, event) {
    const formThree = this.state.formThree;
    formThree[propertyName] = event.target.value;
    this.setState({
      formThree: formThree
    })
  };

  handleOneSubmit(event) {
    event.preventDefault();
    let formOne = this.state.formOne;
    formOne['checkoutID'] = this.state.checkoutID;
    fetch('/formOne', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formOne)
    })
    .then((response) => { return console.log(response.json()) })
    .catch((err) => { console.error(err) });
    this.setState({
      form1: false,
      form2: true
    })
  };

  handleTwoSubmit(event) {
    event.preventDefault();
    let formTwo = this.state.formTwo;
    formTwo['checkoutID'] = this.state.checkoutID;
    fetch('/formTwo', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formTwo)
    })
    .then((response) => { return console.log(response.json()) })
    .catch((err) => { console.error(err) });
    this.setState({
      form2: false,
      form3: true
    })
  };

  handleThreeSubmit(event) {
    event.preventDefault();
    let formThree = this.state.formThree;
    formThree['checkoutID'] = this.state.checkoutID;
    fetch('/formThree', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formThree)
    })
    .then((response) => { return console.log(response.json()) })
    .catch((err) => { console.error(err) });
    this.setState({
      form3: false,
      confirm: true
    })
  }

  handleCheckout(event) {
    event.preventDefault();
    fetch('/checkout', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({checkoutID: this.state.checkoutID})
    })
    .then((response) => { return console.log(response.json()) })
    .catch((err) => { console.error(err) });
    this.setState({
      checkout: false,
      form1: true
    })
  }

  handlePurchase(event) {
    event.preventDefault();
    this.setState({
      checkoutID: this.state.checkoutID + 1,
      confirm: false,
      checkout: true
    })
  }

  /// IMPLEMENT LATER IF HAVE TIME ///
  handleGet(event) {
    event.preventDefault();
    fetch('/purchase', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({checkoutID: this.state.checkoutID})
    })
    .then((response) => { return console.log(response.json()) })
    .catch((err) => { console.error(err) })
  }


  render() {
    return (
      <div>
        <div className="checkout">
          { this.state.checkout &&
            <button className="checkout" onClick={this.handleCheckout.bind(this)}>checkout</button>
          }
        </div>

        <div>
          { this.state.form1 &&
            <div className="formOne">
          <form>

            <div className="name">
              <label>
                <input
                placeholder="Name"
                type="text"
                name="name"
                value={this.state.formOne.name}
                onChange={this.handleChangeOne.bind(this, 'name')}/></label>
              </div>

            <div className="email">
              <label>
                <input
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.formOne.email}
                onChange={this.handleChangeOne.bind(this, 'email')}/></label>
            </div>

            <div className="password">
              <label>
                <input
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.formOne.password}
                onChange={this.handleChangeOne.bind(this, 'password')}/></label>
            </div>

            <button className="formOneSubmit" onClick={this.handleOneSubmit.bind(this)}>Next</button>

          </form>
        </div>
          }
        </div>

        <div>
          { this.state.form2 &&
            <div className="formTwo">
          <form>

            <div className="addressOne">
              <label>
                <input
                placeholder="Address"
                type="text"
                name="addressOne"
                value={this.state.formTwo.addressOne}
                onChange={this.handleChangeTwo.bind(this, 'addressOne')}/></label>
            </div>

            <div className="addressTwo">
              <label>
                <input
                placeholder="Address 2 (optional)"
                type="text"
                name="addressTwo"
                value={this.state.formTwo.addressTwo}
                onChange={this.handleChangeTwo.bind(this, 'addressTwo')}/></label>
            </div>

            <div className="city">
              <label>
                <input
                placeholder="City"
                type="text"
                name="city"
                value={this.state.formTwo.city}
                onChange={this.handleChangeTwo.bind(this, 'city')}/></label>
            </div>

            <div className="state">
              <label>
                <input
                  placeholder="State"
                  type="text"
                  name="state"
                  value={this.state.formTwo.state}
                  onChange={this.handleChangeTwo.bind(this, 'state')}/></label>
            </div>

            <div className="zip">
              <label>
                <input
                placeholder="Zip"
                type="number"
                name="zip"
                maxLength="5"
                value={this.state.formTwo.zip}
                onChange={this.handleChangeTwo.bind(this, 'zip')}/></label>
            </div>

            <div className="phone">
              <label>
                <input
                placeholder="Phone"
                type="tel"
                name="phone"
                value={this.state.formTwo.phone}
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                onChange={this.handleChangeTwo.bind(this, 'phone')}/></label>
            </div>

            <button className="formTwoSubmit" onClick={this.handleTwoSubmit.bind(this)}>Next</button>

          </form>
        </div>
          }
        </div>

        <div>
          { this.state.form3 &&
            <div className="formThree">
          <form>

            <div className="creditCard">
              <label>
                <input
                placeholder="Credit Card #"
                type="number"
                name="creditCard"
                maxLength="16"
                value={this.state.formThree.creditCard}
                onChange={this.handleChangeThree.bind(this, 'creditCard')}/></label>
            </div>

            <div className="expiration">
              <label>
                <input
                placeholder="Experation Date (mmyy)"
                type="number"
                name="expiration"
                maxLength="4"
                value={this.state.formThree.expiration}
                onChange={this.handleChangeThree.bind(this, 'expiration')}/></label>
            </div>

            <div className="CVV">
              <label>
                <input
                placeholder="CVV"
                type="number"
                name="CVV"
                maxLength="3"
                value={this.state.formThree.CVV}
                onChange={this.handleChangeThree.bind(this, 'CVV')}/></label>
            </div>

            <div className="billingZip">
              <label>
                <input
                placeholder="Billing Zip Code"
                type="number"
                name="billingZip"
                maxLength="5"
                value={this.state.formThree.billingZip}
                onChange={this.handleChangeThree.bind(this, 'billingZip')}/></label>
            </div>

            <button className="formThreeSubmit" onClick={this.handleThreeSubmit.bind(this)}>Next</button>

          </form>
        </div>
          }
        </div>

        <div>
          { this.state.confirm &&
            <div className="confirm">
              <div>
            <div style={{fontSize: "20px"}}> <h1>Please Confirm </h1></div>
            <div>
              <div> Account </div>
              <div>
                <div>
                  <b>Name: </b>{this.state.formOne.name}
                </div>
                <div>
                  <b>Email: </b>{this.state.formOne.email}
                </div>

              </div>
            </div>

            <div>
              <div> Shipping </div>
              <div>
                <div>
                  <b>Address: </b>{this.state.formTwo.addressOne}
                </div>
                <div>
                  <b>City: </b>{this.state.formTwo.city}
                </div>
                <div>
                  <b>State: </b>{this.state.formTwo.state}
                </div>
                <div>
                  <b>Zip Code: </b>{this.state.formTwo.zip}
                </div>
              </div>
            </div>

            <div>
              <div> Payment </div>
              <div>
                <div>
                  <b>Credit Card: </b>card ending in {this.state.formThree.creditCard.substring(this.state.formThree.creditCard.length - 4)}
                </div>
              </div>
            </div>


            <button className="purchase" onClick={this.handlePurchase.bind(this)}> Purchase </button>
          </div>
            </div>
          }
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
