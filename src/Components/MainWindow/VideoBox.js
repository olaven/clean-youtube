import React, { Component } from 'react';

class VideoBox extends Component {
    render() {
        return (
            <iframe className="VideoBox" src={this.props.videoSource} title={this.props.title} allowFullScreen>
            </iframe>
        );
    }
}

export default VideoBox;
