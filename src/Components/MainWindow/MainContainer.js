import React, { Component } from 'react';
import VideoBox from "./VideoBox"; 
import GUIBox from "./GUIBox"; 

class MainContainer extends Component {
    render() {
        return (
            <div className="VideoBox">
                <GUIBox></GUIBox>
                <VideoBox></VideoBox>
            </div>
        );
    }
}

export default MainContainer;
