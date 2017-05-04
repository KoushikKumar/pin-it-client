import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAllImages } from '../../actions';

class Logo extends Component {

    handleOnClickLogo() {
        this.props.fetchAllImages();
    }

    render() {
        return (
            <div className="logo-container">
                <div className="logo">
                    <img onClick={() => {this.handleOnClickLogo()}} className="logo-image" src="http://res.cloudinary.com/koushik/image/upload/v1493062010/Untitled-1_iyfawp.png" />
                </div>
            </div>
        );
    }
}

export default connect(null, { fetchAllImages })(Logo)