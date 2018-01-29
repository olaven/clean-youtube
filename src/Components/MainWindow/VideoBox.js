import React, { Component } from 'react';

class VideoBox extends Component {
    render() {
        return (
            <iframe className="VideoBox" src={this.props.videoSource} frameBorder="1" allowFullScreen>
            </iframe>
        );
    }
}

export default VideoBox;
