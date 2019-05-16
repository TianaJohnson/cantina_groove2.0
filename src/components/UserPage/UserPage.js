import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
// import AdminRow from './AdminRow';
import UserHeader from './../UserHeader/UserHeader';
// import QrComponent  from './../QrComponent/QrComponent';
// import NewCustomer from '../CustomerFile/CustomerInfo/NewCustomer';


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
        <div className="admin_text">
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
