import React, { Component } from 'react';
import VideoBox from "./VideoBox"; 
import GUIBox from "./GUIBox"; 

class MainContainer extends Component {
    render() {
        return (
            <div className="VideoBox">
                <GUIBox></GUIBox>
                <VideoBox videoSource={this.props.videoSource}></VideoBox>
            </div>
        );
    }
}

export default MainContainer;
