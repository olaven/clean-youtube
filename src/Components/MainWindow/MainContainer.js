import React, { Component } from 'react';
import VideoBox from "./VideoBox"; 
import GUIBox from "./GUIBox"; 

class MainContainer extends Component {
    render() {
        return (
            <div className="MainContainer">
                <GUIBox></GUIBox>
                <VideoBox videoSource={this.props.videoSource}></VideoBox>
            </div>
        );
    }

    enableSearchView(){
        console.log("serach");
        
    }
    enableKeybindView(){
        console.log("keybind");
        
    }
}

export default MainContainer;
