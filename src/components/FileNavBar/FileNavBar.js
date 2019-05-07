import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

class FileNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
// tool bar (tabs) to navigate through customer file
        return (
            <Paper square>
            
                {/* <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        centered
                    >
                        <Tab label="-" />
                        <Tab label="-" />
                        <Tab label="-" /> */}
                        {/* <Tab label="" /> */}
                        {/* <Tab label="Contact Information" /> */}
                    {/* </Tabs>
                </AppBar>
                {value === 0 && <ProjectPage match={this.props.match} history={this.props.history}/>} 
                {value === 1 && <FitDataPage match={this.props.match} history={this.props.history}/>}
                {/* {value === 2 && <BuildStatusPage match={this.props.match} history={this.props.history}/>} */}
                {value === 2 && <CustomerNotesPage match={this.props.match} history={this.props.history}/>}
                {/* {value === 4 && <CustomerContactInfo match={this.props.match} history={this.props.history}/>} */}
            </Paper> 
        )
    }

}
// CustomerToolBar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}
export default connect(mapStateToProps)(FileNavBar);