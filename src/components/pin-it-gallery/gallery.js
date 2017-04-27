import React, { Component } from 'react';
import { connect } from 'react-redux';
import StackGrid from "react-stack-grid";

import { fetchAllImages } from '../../actions';

class Gallery extends Component {

    componentWillMount() {
        this.props.fetchAllImages();
    }

    renderImages() {
        return this.props.imagesData.map((imageData, index) => {
            return (
                <div className="pinit-pic-container" key={index}>
                    <div className="pinit-pic-inner-container">
                        <img className="pinit-pic" src={imageData.imageUrl} />
                    </div>
                </div>
            );
        })
    }


    render() {
        return (
            <StackGrid
                className="container stack-grid-container"
                columnWidth={"25%"}
                gutterWidth={5}
                gutterHeight={5}
                duration={1000}
                appearDelay={100}
                monitorImagesLoaded={true}
                vendorPrefix={true} >
            
                {this.renderImages()}
            </StackGrid>
        );
    }
}

function mapStateToProps(state) {
    return {
        imagesData: state.images.imagesData
    }
}

export default connect(mapStateToProps, { fetchAllImages })(Gallery)