import React, { Component } from 'react';
import { connect } from 'react-redux';

import { myPinsButtonClicked } from '../../actions';

class MyPinButton extends Component {

    handleMyButton() {
        this.props.myPinsButtonClicked(this.props.userData.user_name);
    }

    render() {
        return (
            <div className="my-pins-container">
                <div className="pinit-button my-pins-button">
                    <span onClick = {() => {this.handleMyButton()}} className="my-pin-button-text">
                        <span className="pinit-button-text-left">My</span><span>Pins</span>
                    </span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userData: state.user.userData
    }
}

export default connect(mapStateToProps, { myPinsButtonClicked })(MyPinButton)