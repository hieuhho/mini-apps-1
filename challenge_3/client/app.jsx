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
  };

  handleOneSubmit(event) {
    event.preventDefault();
    console.log(this.state.formOne);
  };

  handleChangeTwo(propertyName, event) {
    const formTwo = this.state.formTwo;
    formTwo[propertyName] = event.target.value;
    this.setState({
      formTwo: formTwo
    })
  };

  handleTwoSubmit(event) {
    event.preventDefault();
    console.log(this.state.formTwo);
  }

  handleChangeThree(propertyName, event) {
    const formThree = this.state.formThree;
    formThree[propertyName] = event.target.value;
    this.setState({
      formThree: formThree
    })
  };

  handleThreeSubmit(event) {
    event.preventDefault();
    console.log(this.state.formThree);
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
                type="text"
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

            <div className="addressTWo">
              <label>
                <input
                placeholder="Address 2 (optional)"
                type="text"
                name="addressTWo"
                value={this.state.formTwo.addressTWo}
                onChange={this.handleChangeTwo.bind(this, 'addressTWo')}/></label>
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
                type="text"
                name="zip"
                value={this.state.formTwo.zip}
                onChange={this.handleChangeTwo.bind(this, 'zip')}/></label>
            </div>

            <div className="phone">
              <label>
                <input
                placeholder="Phone"
                type="text"
                name="phone"
                value={this.state.formTwo.phone}
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
                type="text"
                name="creditCard"
                value={this.state.formThree.creditCard}
                onChange={this.handleChangeThree.bind(this, 'creditCard')}/></label>
            </div>

            <div className="expiration">
              <label>
                <input
                placeholder="Experation Date (mmyy)"
                type="text"
                name="expiration"
                value={this.state.formThree.expiration}
                onChange={this.handleChangeThree.bind(this, 'expiration')}/></label>
            </div>

            <div className="CVV">
              <label>
                <input
                placeholder="CVV"
                type="text"
                name="CVV"
                value={this.state.formThree.CVV}
                onChange={this.handleChangeThree.bind(this, 'CVV')}/></label>
            </div>

            <div className="billingZip">
              <label>
                <input
                placeholder="Billing Zip Code"
                type="text"
                name="billingZip"
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
