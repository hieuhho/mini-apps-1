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

  render() {
    return (
      <div>
        <button>clickme</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
