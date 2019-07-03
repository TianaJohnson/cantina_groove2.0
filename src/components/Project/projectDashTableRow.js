import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';



class projectDashTableRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            is_active: true,
        }
    }

    editCust = () => {
        this.props.history.push(`updatecustomer/${this.props.client.id}`);
    }
    // on click of btn sends user to customer file page
    custFile = () => {
        this.props.history.push(`/file/${this.props.client.id}`);
    }

    // archiveFile = (event) => {
    //     this.setState({
    //         is_active: false,
    //     })
    //   }


    archiveCust = (event) => {
        console.log('archive customer sending to customer sagas');
        const action = {
            type: 'ARCHIVE_CUSTOMER',
            payload: {
                        is_active: false, id:this.props.client.id,
                    },
        };
        console.log('archived!!!!')
        this.props.dispatch(action);
        // this.props.history.push('/home')
    } 



    // breakdown of customer info in the table from admin page
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.client.first_name}</TableCell>

            </TableRow>
        )
    }
}

const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(projectDashTableRow);