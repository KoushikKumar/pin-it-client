import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userButtonClicked } from '../../actions';

class PinItImageOwner extends Component {

    handleUserButton() {
        this.props.userButtonClicked(this.props.imageData.createdBy);
    }

    render() {
        return (
            <div className="pic-user">
                <span onClick={() => {this.handleUserButton()}} className="my-pin-button-text pic-user-text">
                    {this.props.imageData.createdBy}
                </span>
            </div>
        );
    }
}

export default connect(null, { userButtonClicked })(PinItImageOwner)