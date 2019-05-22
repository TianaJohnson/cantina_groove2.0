import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class CustomerContact extends Component {

    
    render() {
        return(

        )
    }


}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
  }
  
  export default connect(mapStateToProps)(CustomerContact);