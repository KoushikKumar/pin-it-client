import React, { Component } from 'react';
import { connect } from 'react-redux';

import { unSaveImage } from '../../actions';

class UnSaveImage extends Component {

    handleUnPinItButton() {
        this.props.unSaveImage(this.props.imageData._id, this.props.userData["user_name"], this.props.tabName)
    }

    render() {
        return (
            <div className="unsave-pin-container">
                <div className="unsave-pin">
                    <span onClick={()=>{this.handleUnPinItButton()}} className="my-pin-button-text">
                        <span className="unsave-pin-text-left">Unpin</span><span>It</span>
                    </span>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        userData: state.user.userData,
        tabName: state.tab.tabName
    }
}

export default connect(mapStateToProps, { unSaveImage })(UnSaveImage)