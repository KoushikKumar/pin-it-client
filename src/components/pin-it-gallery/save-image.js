import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveImage } from '../../actions';

class SaveImage extends Component {

    handlePinItButton() {
        this.props.saveImage(this.props.imageData._id, this.props.userData["user_name"])
    }

    render() {
        return (
            <div className="save-pin-container">
                <div className="save-pin">
                    <span onClick={()=>{this.handlePinItButton()}} className="my-pin-button-text">
                        <span className="save-pin-text-left">Pin</span><span>It</span>
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

export default connect(mapStateToProps, { saveImage })(SaveImage)