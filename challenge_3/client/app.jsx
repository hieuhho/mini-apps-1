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
        line1: '',
        line2: '',
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
                type="text"
                name="password"
                value={this.state.formOne.password}
                onChange={this.handleChangeOne.bind(this, 'password')}/></label>

                <button className="formOneSubmit" onClick={this.handleOneSubmit.bind(this)}>Next</button>

          </form>

        </div>
        <button>clickme</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
