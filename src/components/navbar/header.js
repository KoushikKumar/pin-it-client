import React, { Component } from 'react';

export default class Header extends Component {

    renderAuthenticatedOnlyNavButtons() {
        return (
            <div className="authenticated-only-nav-buttons-container">
                <div className="my-pins-container">
                    <div className="pinit-button my-pins-button">
                        <span className="pinit-button-text-left">My</span><span>Pins</span>
                    </div>
                </div>
                <div className="saved-pins-container">
                    <div className="pinit-button saved-pins-button">
                        <span className="pinit-button-text-left">Saved</span><span>Pins</span>
                    </div>
                </div>
            </div>
        );
    }

    renderLogo() {
        return (
            <div className="logo-container">
                <div className="logo">
                    <img className="logo-image" src="http://res.cloudinary.com/koushik/image/upload/v1492875656/pinit-logo_t1iva1.jpg" />
                </div>
            </div>
        );
    }

    renderAddPinAndAuthButton() {
        return (
            <div className="add-pin-and-auth-button-container">
                <div className="add-pin-container">
                    <div className="input-group add-pin">
                        <input type="text" className="form-control" placeholder="Add Pin" aria-describedby="basic-addon2" />
                        <span className="input-group-addon" id="basic-addon2">ADD</span>
                    </div>
                </div>
                <div className="auth-button-container">
                    <div className="pinit-button auth-button">
                        <span className="pinit-button-text-left">Log</span><span>Out</span>
                    </div>
                </div>
            </div>
        );
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