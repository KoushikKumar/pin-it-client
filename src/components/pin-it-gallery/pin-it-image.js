import React, { Component } from 'react';
import { connect } from 'react-redux';

import PinItImageOwner from './pin-it-image-owner';
import DeleteImage from './delete-image';
import SaveImage from './save-image';
import UnSaveImage from './un-save-image';

class PitItImage  extends Component {

    constructor(props) {
        super(props);
        this.state = {isHovered: false, imageUrl:""}
    }

    renderImage() {
        if(this.state.isHovered) {
            return (
                <div className="pinit-hovered-container">
                    {this.renderHoveredImage()}
                    {this.renderHoveredFooter()}
                </div>
            )
        } else {
            return (
                <div className="pinit-pic-inner-container">
                    <img className="pinit-pic" src={this.props.imageData.imageUrl} />
                </div>
            )
        }
    }

    renderHoveredImage() {
        return (
            <div className="pinit-pic-inner-container">
                <img className="pinit-hovered-pic" src={this.props.imageData.imageUrl} />
            </div>
        );
    }

    renderHoveredFooter() {
        return (
            <div className="pic-hover-footer-container">
                {this.renderUser()}
                {this.renderFooterButton()}
            </div>
        );
    }

    renderUser() {
        return <PinItImageOwner imageData={this.props.imageData} />
    }

    renderFooterButton() {
        if(this.props.isUserAuthenticated) {
            if(this.props.imageData.createdBy === this.props.userData.user_name) {
                return <DeleteImage imageData={this.props.imageData}/>
            } 
            if(this.props.imageData.pinnedBy.indexOf(this.props.userData.user_name) < 0) {
                return <SaveImage imageData={this.props.imageData}/>
            } 
            return <UnSaveImage imageData={this.props.imageData}/>
        }
    }

    handleMouseEnterEvent() {
        this.setState({isHovered:true});
    }

    handleMouseLeaveEvent() {
        this.setState({isHovered:false});
    }

    render() {
        return (
            <div onMouseLeave={() => {this.handleMouseLeaveEvent()}}
                 onMouseEnter={() => {this.handleMouseEnterEvent()}}
                 className="pinit-pic-container">

                {this.renderImage()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isUserAuthenticated: state.auth.isUserAuthenticated,
        userData: state.user.userData
    }
}


export default connect(mapStateToProps)(PitItImage)