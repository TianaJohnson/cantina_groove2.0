import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import UserHeader from './../UserHeader/UserHeader';
import './UserPage.css';


//Class constructor
class UserPage extends Component {
   

  // on click of btn, sends user to new customer page
  addNew = () => {
    this.props.history.push('/newcustomer');
  }
  // table display of all customers currentlt 02/16/19
  // eventually will display customer name and project file name
  render() {
    return (
        <div className="user_page_main">
  <UserHeader match={this.props.match} history={this.props.history}/>
  <h1>Customers</h1>
  <Button variant="contained"
               color="primary"
               onClick={this.addNew}
               style={{ margin: 10 }}>
               Add New Customer
               </Button>
  </div> 
    )
  }

}
const mapStateToProps = reduxStore => {
  return { reduxStore: reduxStore };
}
export default connect(mapStateToProps)(UserPage);
