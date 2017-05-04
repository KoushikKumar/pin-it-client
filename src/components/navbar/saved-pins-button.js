import React, { Component } from 'react';
import { connect } from 'react-redux';

import { savedPinsButtonClicked } from '../../actions';

class SavedPinsButton extends Component {

    handleSavedPinsButton() {
        this.props.savedPinsButtonClicked(this.props.userData.user_name);
    }

    render() {
        return (
            <div className="saved-pins-container">
                <div className="pinit-button saved-pins-button">
                    <span onClick = { () => {this.handleSavedPinsButton()}} className="saved-pins-button-text">
                        <span className="pinit-button-text-left">Saved</span><span>Pins</span>
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

export default connect(mapStateToProps, { savedPinsButtonClicked })(SavedPinsButton)