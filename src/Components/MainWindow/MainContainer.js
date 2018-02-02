import React, { Component } from 'react';
import VideoBox from "./VideoBox"; 
import GUIBox from "./GUIBox"; 

class MainContainer extends Component {
    renderGUIIfEnabled(){
        if(this.props.isGUIEnabled){
            return (
                <GUIBox
                    toggleSearchView={this.props.toggleSearchView}
                    toggleKeybindView={this.props.toggleKeybindView}
                    toggleGUI={this.props.toggleGUI}
                >
                </GUIBox>
            )
        }
    }
    render() {
        return (
            <div className="MainContainer">
                {this.renderGUIIfEnabled()}
                <VideoBox videoSource={this.props.videoSource}></VideoBox>
            </div>
        );
    }
}

export default MainContainer;
