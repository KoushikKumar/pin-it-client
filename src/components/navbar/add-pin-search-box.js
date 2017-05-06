import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addImageUrl } from '../../actions';

class AddPinSearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {imageUrl:""}
    }

    handleUserInput(e) {
        this.setState({imageUrl:e.target.value});
    }

    addImage() {
        if(this.state.imageUrl) {
            this.props.addImageUrl(this.state.imageUrl, this.props.userData["user_name"], this.props.tabName);
            this.setState({imageUrl:""})
        }
    }

    render() {
        return (
            <div className="input-group add-pin">
                <input onChange={(e) => {this.handleUserInput(e)}}
                       value={this.state.imageUrl} 
                       type="text" 
                       className="form-control" 
                       placeholder="Add Image Url" 
                       aria-describedby="basic-addon2" />
                <span onClick={() => {this.addImage()}}  className="input-group-addon my-pin-button-text" id="basic-addon2">
                    Add
                    <span className="add-pin-text-right">It</span>
                </span>
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

export default connect(mapStateToProps, { addImageUrl })(AddPinSearchBox)