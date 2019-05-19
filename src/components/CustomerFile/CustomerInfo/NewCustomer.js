import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './NewCustomer.css';


class NewCustomer extends Component {

  // state
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      full_name: '',
      pro_nouns: '',
      email: '',
      phone_number: '',
      cust_notes: '',
      date_activated: date
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      const action = { type: 'FETCH_FOCUS_CUSTOMER', payload: id };
      this.props.dispatch(action);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCust = prevProps.reduxStore.addCust.customerFocusReducer;
    const upCust = this.props.reduxStore.addCust.customerFocusReducer;
    if (upCust !== prevCust) {
      this.setState({
        ...upCust,
        editing: true,
      })
      console.log('did mount', upCust);
      // this.loadState(upCust);
    }
  }

  // //saga post to update/edit current customer info
  // updateCust = (event) => {
  //   console.log('update cust');
  //   const action = {
  //     type: 'UPDATE_CUSTOMER',
  //     payload: this.state,
  //   };
  //   this.props.dispatch(action);
  //   this.setState({
  //     customers_full_name: '',
  //     pro_nouns: '',
  //     email: '',
  //     phone_number: '',
  //     customer_notes: '',
  //   })
  //   this.props.history.push('/home');
  // }

  // //Send to saga to create a customer in the data base
  // addCustomer = (event) => {
  //   console.log('add cust');
  //   const action = {
  //     type: 'SET_CUSTOMER',
  //     payload: this.state,
  //   };
  //   this.props.dispatch(action);
  //   this.setState({
  //     customers_full_name: '',
  //     pro_nouns: '',
  //     email: '',
  //     phone_number: '',
  //     customer_notes: '',
  //   })
  //   this.props.history.push('/home');
  // }

  // // input state update
  handleChange = (key) => (event) => {
    const action = {
        type: 'ADD_CUSTOMER',
        payload: { key: key, value: event.target.value },
    };
    console.log('sending to project saga')
    this.props.dispatch(action);
}


  render() {

    return (
      <div className="add_custpage">
      <br/>
      <br/>
      <Card className="add_card">
      <div className="addcust_text">
      <br/>
      New Customer Intake:
        <form className="form_newCust" >
        <br/>
          <TextField
            style={{ margin: 10 }}
            className="new-cust-intake"
            id="outlined-name"
            label="Name"
            placeholder="Full Name"
            margin="normal"
            variant="outlined"
            type="text"
            value={this.state.full_name}
            onChange={this.handleChange}
          />
          <TextField
            style={{ margin: 10 }}
            className="new-cust-intake"
            id="outline-pronouns"
            label="pronouns"
            variant="outlined"
            margin="normal"
            value={this.state.pro_nouns}
            onChange={this.handleChange}
          />
          <TextField
            style={{ margin: 10 }}
            className="new-cust-intake"
            id="outline-email"
            label="email"
            placeholder="email address"
            variant="outlined"
            margin="normal"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <TextField
            style={{ margin: 10 }}
            className="new-cust-intake"
            id="outline-phonenumber"
            label="Phone Number"
            variant="outlined"
            margin="normal"
            value={this.state.phone_number}
            onChange={this.handleChange}
          />
          <TextField 
            // style={{ margin: 10 }}
            className="new-cust-intake"
            id="outline-notes"
            label="notes"
            variant="outlined"
            margin="normal"
            multiline rows="8"
            fullWidth
            value={this.state.customer_notes}
            onChange={this.handleChange}
          />
          {
            this.state.editing ?
              // true
              <Button onClick={this.updateCust}
                style={{ margin: 10 }}
                variant="contained"
                color="primary"
                className="editCustBtn">
                Update
           </Button>
              :
              // false
              <Button onClick={this.addCustomer}
                style={{ margin: 10 }}
                variant="contained"
                color="primary"
                className="addCustBtn"
                size="large">
                Add Customer
           </Button>
          }
        </form>
        </div>
      </Card>
      <br/>
      <br/>
      </div>
      // end material ui intake form for new customer
    )
  }

}

const mapStateToProps = reduxStore => {
  return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(NewCustomer);