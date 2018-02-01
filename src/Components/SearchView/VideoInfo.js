import React, { Component } from 'react';

class VideoInfo extends Component {
    render() {
        return (
            <div className="VideoInfo" 
                onClick={() => {
                    this.props.changeVideo(this.props.title, this.props.videoSource); 
                }}
            >
                <img src={this.props.imageSource} alt="video thumbnail"></img>
                <h1>{this.props.title}</h1>
                <p>{this.props.videoSource}</p>
            </div>
        );
    }
}

export default VideoInfo;
