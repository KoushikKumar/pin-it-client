import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAllImages, tab } from '../../actions';
import { VIEW_ALL_TAB } from '../../constants/pin-it-constants';

class Logo extends Component {

    componentWillMount() {
        this.props.tab(VIEW_ALL_TAB);
    }

    handleOnClickLogo() {
        this.props.fetchAllImages();
        this.props.tab(VIEW_ALL_TAB);
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

export default connect(null, { fetchAllImages, tab })(Logo)