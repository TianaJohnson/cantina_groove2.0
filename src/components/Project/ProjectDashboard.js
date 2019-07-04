import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import UserHeader from './../UserHeader/UserHeader';
import ProjectRow from './../Project/projectDashTableRow';
import './project.css';

// This needs to be updated to reflect the project Dash 
// admin is a temp from old Cantina. 

//Class constructor
class projectDash extends Component {
  constructor(props){
    super(props);
    this.state = {
        is_active: true,
    }
}

  componentDidMount() {
    // this.props.dispatch({ type: 'FETCH_FOCUS_CUSTOMER' });
    // this.custName();
    this.props.dispatch({ type: 'FETCH_CUSTOMER', payload: { id: this.props.match.params.id } });  
    // this.props.dispatch({ type: 'FETCH_PREOJECT', payload: {}})  
}
  // on click of btn, sends user to new customer page
  addNew = () => {
    this.props.history.push('/newcustomer');
  }
  // table display of all customers currentlt 02/16/19
  // eventually will display customer name and project file name
  render() {
    return (
      <div className="admin_main">
        <Card className="admin_card">
        <div className="admin_text">
  <UserHeader match={this.props.match} history={this.props.history}/>
  <h1>Customers</h1>
  {/* <div class="sharethis-inline-share-buttons"></div> */}
  {/* ^^^ display share icons */}
  {/* <QrComponent /> */}
  {/* ^^^ links to Qr Reader component */}
  {/* https://www.npmjs.com/package/react-qr-reader */}
  <Button variant="contained"
               color="primary"
               onClick={this.addNew}
               style={{ margin: 10 }}>
               Add New Customer
               </Button>
  </div> 
<Paper>
 <Table className="admin_table">
   <TableHead>
     <TableRow>
       <TableCell>Project ID</TableCell>
       <TableCell>Title</TableCell>
       <TableCell>Customer Name</TableCell>
       <TableCell>Edit Customer Info</TableCell>
       <TableCell>View/Edit</TableCell>

     </TableRow>
   </TableHead>
   <TableBody>
         {this.props.reduxStore.customer.customerReducer.map(client =>
           <ProjectRow key={client.id} history={this.props.history} client={client}/>
         )}
         
       
   </TableBody>
 </Table>
</Paper>

        </Card>
      </div>

    )
  }

}
const mapStateToProps = reduxStore => {
  return { reduxStore: reduxStore };
}
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(projectDash);