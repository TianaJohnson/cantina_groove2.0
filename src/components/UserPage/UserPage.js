import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './UserPage.css';
import Button from '@material-ui/core/Button';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div className="user_page_main">
    <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    {/* <p>Your ID is: {props.user.id}</p> */}
    <p>This page will show a snap shot of projects + status of said project.</p>
  </div>
  <div>
    <Button variant="contained"
               color="primary"
              //  onClick={this.addNew}
               style={{ margin: 10 }}>
               Add New Customer
               </Button>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
