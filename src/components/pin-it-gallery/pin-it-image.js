import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                    {this.renderHoveredHeader()}
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

    renderHoveredHeader() {
        if(this.props.isUserAuthenticated && this.props.imageData.createdBy === this.props.userData.user_name) {
            return (
                <div className="pic-hover-header-container">
                    <div className="delete-pic-container">
                        <div className="delete-pic">
                            <span className="delete-pin-text-left">Delete</span><span>It</span>
                        </div>
                    </div>
                </div>
            );
        }
    }

    renderHoveredFooter() {
        return (
            <div className="pic-hover-footer-container">
                {this.renderUser()}
                {this.renderPinItButton()}
            </div>
        );
    }

    renderUser() {
        return (
            <div className="pic-user">
                {this.props.imageData.createdBy}
            </div>
        );
    }

    renderPinItButton() {
        if(this.props.isUserAuthenticated && this.props.imageData.createdBy !== this.props.userData.user_name) {
            if(this.props.imageData.pinnedBy.indexOf(this.props.userData.user_name) < 0) {
                return (
                    <div className="save-pin-container">
                        <div className="save-pin">
                            <span className="save-pin-text-left">Pin</span><span>It</span>
                        </div>
                    </div>
                );
            }
            return (
                <div className="save-pin-container">
                    <div className="save-pin">
                        <span className="save-pin-text-left">Unpin</span><span>It</span>
                    </div>
                </div>
            );
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