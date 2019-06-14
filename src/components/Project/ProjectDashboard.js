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
// import projectRow from './../Project/projectDashTableRow';
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
    this.props.dispatch({ type: 'FETCH_PROJECT', payload: { id: this.props.match.params.id } });    
}
   

  // on click of btn, sends user to new customer page
  addNew = () => {
    this.props.history.push('/newcustomer');
  }
  // table display of all customers currentlt 02/16/19
  // eventually will display customer name and project file name
  render() {
    return (
      <div className="dash_main">
        <Card className="dash_card">
        <div className="dash_text">
          
  <UserHeader match={this.props.match} history={this.props.history}/>
  <h1>Customers</h1>
  <Button variant="contained"
               color="primary"
               onClick={this.addNew}
               style={{ margin: 10 }}>
               Add New Customer
               </Button>
               <br/>
               {/* look into this more\/ */}
               {/* {JSON.stringify(this.props.customer.customerReducer.first_name)} */}

  </div> 
<Card className="admin_table_card">
<Paper>
 <Table className="project_table">
   <TableHead>
     <TableRow>
       <TableCell>Project</TableCell>
       <TableCell>Customer Name</TableCell>
       <TableCell>Status</TableCell>
       <TableCell>Edit Customer Info</TableCell>
       <TableCell>View/Edit</TableCell>
       <TableCell></TableCell>
     </TableRow>
   </TableHead>
   <TableBody>
     {/* not  a function  ugh */}
         {/* {this.props.reduxStore.customer.customerReducer.map(client =>
           <projectRow key={client.id} history={this.props.history} client={client}/>
         )} */}

         {/* We are going to try this... */}
          <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell><Button variant="contained"
                        color="secondary"
                        // onClick={this.custFile}
                        style={{ margin: 10 }}>
                        Customer File
                </Button></TableCell>
                    {/* <Button variant="contained"
                        color="inherit"
                        // onClick={this.archiveCust}
                        style={{ margin: 10 }}>
                        Delete
                    </Button> */}
                    <TableCell> <Button variant="contained"
                    size="small"
                    // onClick={this.editCust}
                    color="primary"
                    style={{ margin: 10 }}>
                    Edit
                </Button>
                </TableCell>

            </TableRow>
         
       
   </TableBody>
 </Table>
</Paper>
</Card>
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