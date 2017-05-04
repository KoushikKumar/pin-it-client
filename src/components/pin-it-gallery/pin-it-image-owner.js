import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userButtonClicked } from '../../actions';

class PinItImageOwner extends Component {

    handleUserButton() {
        this.props.userButtonClicked(this.props.imageData.createdBy);
    }

    render() {
        return (
            <div onClick={() => {this.handleUserButton()}} className="pic-user">
                {this.props.imageData.createdBy}
            </div>
        );
    }
}

export default connect(null, { userButtonClicked })(PinItImageOwner)