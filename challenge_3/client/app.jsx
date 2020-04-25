class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
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
      unique: {
        email: '',
        addressOne: '',
        creditCard: '',
      }
    }
  }
  /*
  start out hidden
  if checkout is clicked
  form 1 reveal
  if next(form2) click
  hide form1, reveal form 2
  if next(form3) click
  hide form2 reveal 3
  when click done
  hides all
  redirect to home
  */

  handleChangeOne(propertyName, event) {
    const formOne = this.state.formOne;
    formOne[propertyName] = event.target.value;
    this.setState({
      formOne: formOne
    })
    if (propertyName === 'email') {
      const unique = this.state.unique;
      unique[propertyName] = event.target.value;
      this.setState({
        unique: unique
      })
    }
  };

  handleChangeTwo(propertyName, event) {
    const formTwo = this.state.formTwo;
    formTwo[propertyName] = event.target.value;
    this.setState({
      formTwo: formTwo
    })
    if (propertyName === 'addressOne') {
      const unique = this.state.unique;
      unique[propertyName] = event.target.value;
      this.setState({
        unique: unique
      })
    }
  };

  handleChangeThree(propertyName, event) {
    const formThree = this.state.formThree;
    formThree[propertyName] = event.target.value;
    this.setState({
      formThree: formThree
    })
    if (propertyName === 'creditCard') {
      const unique = this.state.unique;
      unique[propertyName] = event.target.value;
      this.setState({
        unique: unique
      })
    }
  };

  handleOneSubmit(event) {
    event.preventDefault();
    let formOne = this.state.formOne;
    fetch('/formOne', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formOne)
    })
    .then((response) => { return console.log(response.json()) })
    .catch((err) => { console.error(err) })
  };


  handleTwoSubmit(event) {
    event.preventDefault();
    let formTwo = this.state.formTwo;
    fetch('/formTwo', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formTwo)
    })
    .then((response) => { return console.log(response.json()) })
    .catch((err) => { console.error(err) })
  }

  handleThreeSubmit(event) {
    event.preventDefault();
    let formThree = this.state.formThree;
    fetch('/formThree', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formThree)
    })
    .then((response) => { return console.log(response.json()) })
    .catch((err) => { console.error(err) })
  }

  render() {
    return (
      <div>
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

        <div className="formTWo">
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

        <button>clickme</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
