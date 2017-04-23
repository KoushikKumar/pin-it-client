import React,  { Component } from 'react';
import { connect } from 'react-redux';

import { logIn, logOut } from '../../actions';

class AuthButton extends Component {

    renderAuthButton() {
        if(this.props.isUserAuthenticated) {
            return (
                <div className="pinit-button auth-button">
                    <a onClick={()=>this.handleLogOut()}><span className="pinit-button-text-left">Log</span><span>Out</span></a>
                </div>
            );
        } 
        return (
            <div className="pinit-button auth-button">
                <a onClick={()=>this.handleLogIn()}><span className="pinit-button-text-left">Log</span><span>In</span></a>
            </div>
        );
    }

    handleLogIn() {
        this.props.logIn();
    }

    handleLogOut() {
        this.props.logOut();
    }

    render() {
        return (
            <div className="auth-button-container">
                {this.renderAuthButton()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isUserAuthenticated: state.auth.isUserAuthenticated
    }
}

export default connect(mapStateToProps, { logIn, logOut })(AuthButton)