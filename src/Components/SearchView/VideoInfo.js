import React, { Component } from 'react';

class VideoInfo extends Component {
    render() {
        return (
            <div className="VideoInfo">
                <img src={this.props.imageSource} alt="video thumbnail"></img>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default VideoInfo;
