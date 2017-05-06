import React, { Component } from 'react';
import { connect } from 'react-redux';

import { myPinsButtonClicked, tab } from '../../actions';
import { MY_PINS_TAB } from '../../constants/pin-it-constants';

class MyPinButton extends Component {
    
    handleMyPinsButton() {
        this.props.myPinsButtonClicked(this.props.userData.user_name);
        this.props.tab(MY_PINS_TAB);
    }

    render() {
        return (
            <div className="my-pins-container">
                <div className="pinit-button my-pins-button">
                    <span onClick = {() => {this.handleMyPinsButton()}} className="my-pin-button-text">
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

export default connect(mapStateToProps, { myPinsButtonClicked, tab })(MyPinButton)