import React, { Component }  from 'react';
import { connect } from 'react-redux';

import { deleteImage } from '../../actions';

class DeleteImage extends Component {

    handleDeleteImage() {
        this.props.deleteImage(this.props.imageData._id);
    }

    render() {
        return (
            <div className="delete-pin-container">
                <div className="delete-pin">
                    <span onClick={() => {this.handleDeleteImage()}} className="my-pin-button-text">
                        <span className="delete-pin-text-left">Delete</span><span>It</span>
                    </span>
                </div>
            </div>
        );
    } 
}   

export default connect(null, { deleteImage })(DeleteImage)