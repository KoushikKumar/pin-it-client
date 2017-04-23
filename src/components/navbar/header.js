import React, { Component } from 'react';
import { connect } from 'react-redux';

import MyPinsButton from './my-pins-button';
import SavedPinsButton from './saved-pins-button';
import Logo from './logo';
import AddPinSearchBox from './add-pin-search-box';
import AuthButton from './auth-button';

class Header extends Component {

    renderAuthenticatedOnlyNavButtons() {
        return (
            <div className="authenticated-only-nav-buttons-container">
                {this.renderMyPinsButton()}
                {this.renderSavedPinsButton()}
            </div>
        );
    }

    renderMyPinsButton() {
        if(this.props.isUserAuthenticated) {
            return <MyPinsButton />;
        }
    }

    renderSavedPinsButton() {
        if(this.props.isUserAuthenticated) {
            return <SavedPinsButton />;
        }
    }

    renderLogo() {
        return <Logo />;
    }

    renderAddPinAndAuthButton() {
        return (
            <div className="add-pin-and-auth-button-container">
                <div className="add-pin-container">
                    {this.renderAddPinSearchBox()}
                </div>
                <AuthButton />
            </div>
        );
    }

    renderAddPinSearchBox() {
        if(this.props.isUserAuthenticated) {
            return <AddPinSearchBox />;
        }
    }

    render() {
        return (
            <div className="header-container">
                {this.renderAuthenticatedOnlyNavButtons()}
                {this.renderLogo()}
                {this.renderAddPinAndAuthButton()}
            </div>
        );
        
    }
}

function mapStateToProps(state) {
    return {
        isUserAuthenticated: state.auth.isUserAuthenticated
    }
}

export default connect(mapStateToProps)(Header);