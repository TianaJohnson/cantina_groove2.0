import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './NewCustomer.css';



class NewCustomer extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      const action = { type: 'FETCH_FOCUS_CUSTOMER', payload: id };
      this.props.dispatch(action);
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const prevCust = prevProps.reduxStore.addCust.customerFocusReducer;
  //   const upCust = this.props.reduxStore.addCust.customerFocusReducer;
  //   if (upCust !== prevCust) {
  //     this.setState({
  //       ...upCust,
  //       editing: true,
  //     })
  //     console.log('did mount', upCust);
  //     // this.loadState(upCust);
  //   }
  // }


  //Send to saga to create a customer in the data base
  addCustomer = (event) => {
    console.log('add cust');
    const action = {
      type: 'ADD_CUSTOMER',
      payload: this.props.reduxStore.customer.customerReducer,
    };
    this.props.dispatch(action);
    this.setState({
      full_name: '',
      pro_nouns: '',
      email: '',
      phone_number: '',
      cust_notes: '',
      date_activated: '',
    })
    this.props.history.push(`/home`);
  }



// This needs to be messed with a bit to get working
handleChange = (key) => (event) => {
  const action = {
      type: 'SET_CUSTOMER_PROPERTY',
      payload: { key: key, value: event.target.value },
  };
  console.log('sending to project saga')
  this.props.dispatch(action);
}



  render() {
    const customer = this.props.reduxStore.customer.customerReducer;
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
          // customer name intake
            style={{ margin: 10 }}
            className="new-cust-intake"
            id="outlined-name"
            label="Name"
            margin="normal"
            variant="outlined"
            value={customer.full_name}
            onChange={this.handleChange('full_name')}
          />
          <TextField
          // customers prefered pro-nouns
            style={{ margin: 10 }}
            className="new-cust-intake"
            id="outline-pronouns"
            label="pronouns"
            variant="outlined"
            margin="normal"
            value={customer.pro_nouns}
            onChange={this.handleChange('pro_nouns')}
          />
          <TextField
          // customers email contact
            style={{ margin: 10 }}
            className="new-cust-intake"
            id="outline-email"
            label="email"
            variant="outlined"
            margin="normal"
            value={customer.email}
            onChange={this.handleChange('email')}
          />
          <TextField
          // customers phone number
            style={{ margin: 10 }}
            className="new-cust-intake"
            id="outline-phonenumber"
            label="Phone Number"
            variant="outlined"
            margin="normal"
            value={customer.phone_number}
            onChange={this.handleChange('phone_number')}
          />
          <TextField 
          // customer notes
            // style={{ margin: 10 }}
            className="new-cust-intake"
            id="outline-notes"
            label="notes"
            variant="outlined"
            margin="normal"
            multiline rows="8"
            fullWidth
            value={customer.customer_notes}
            onChange={this.handleChange('cust_notes')}
          />
          <TextField 
          // date customer file was created
            // style={{ margin: 10 }}
            className="new-cust-intake"
            id="outline-date"
            type = "date"
            variant="outlined"
            margin="normal"
            fullWidth
            value={customer.date}
            onChange={this.handleChange('date_activated')}
          />
          {
            customer.editing ?
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