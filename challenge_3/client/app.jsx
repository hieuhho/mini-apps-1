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

  render() {
    return (
      <div>
        <div className="formOne">
          <form>

            <label className="name">
              <input
              placeholder="Name"
              type="text"
              name="name"
              value={this.state.formOne.name}
              onChange={this.handleChangeOne.bind(this, 'name')}/></label>

              <label className="email">
                <input
                placeholder="Email"
                type="text"
                name="email"
                value={this.state.formOne.email}
                onChange={this.handleChangeOne.bind(this, 'email')}/></label>

              <label className="password">
                <input
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.formOne.password}
                onChange={this.handleChangeOne.bind(this, 'password')}/></label>

                <button className="formOneSubmit" onClick={this.handleOneSubmit.bind(this)}>Next</button>

          </form>

        </div>

        <div className="formTWo">

          <form>

          <label className="addressOne">
              <input
              placeholder="Address"
              type="text"
              name="addressOne"
              value={this.state.formTwo.addressOne}
              onChange={this.handleChangeTwo.bind(this, 'addressOne')}/></label>

          <label className="addressTWo">
              <input
              placeholder="Address 2 (optional)"
              type="text"
              name="addressTWo"
              value={this.state.formTwo.addressTWo}
              onChange={this.handleChangeTwo.bind(this, 'addressTWo')}/></label>

          <label className="city">
              <input
              placeholder="City"
              type="text"
              name="city"
              value={this.state.formTwo.city}
              onChange={this.handleChangeTwo.bind(this, 'city')}/></label>

          <label className="state">
              <input
              placeholder="State"
              type="text"
              name="state"
              value={this.state.formTwo.state}
              onChange={this.handleChangeTwo.bind(this, 'state')}/></label>

          <label className="zip">
              <input
              placeholder="Zip"
              type="text"
              name="zip"
              value={this.state.formTwo.zip}
              onChange={this.handleChangeTwo.bind(this, 'zip')}/></label>

          <label className="phone">
              <input
              placeholder="Phone"
              type="text"
              name="phone"
              value={this.state.formTwo.phone}
              onChange={this.handleChangeTwo.bind(this, 'phone')}/></label>

          <button className="formTwoSubmit" onClick={this.handleTwoSubmit.bind(this)}>Next</button>

          </form>

        </div>


        <button>clickme</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
