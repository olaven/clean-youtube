import React, { Component } from 'react';

class VideoBox extends Component {
    render() {
        return (
            <iframe src={this.props.videoSource} frameborder="1" allow="autoplay; encrypted-media" allowfullscreen>
            
            </iframe>
        );
    }
}

export default VideoBox;
