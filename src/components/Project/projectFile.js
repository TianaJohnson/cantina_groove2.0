import React, { Component } from 'react';
import { connect } from 'react-redux';
import './project.css';

class projectFile extends Component {


    render() {
        return (
                <div>
                    Project File Page
                </div>
        )
    }
}

const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(projectFile)
