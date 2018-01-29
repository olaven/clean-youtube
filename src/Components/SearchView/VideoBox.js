import React, { Component } from 'react';

class VideoBox extends Component {
    render() {
        return (
            <div className="VideoBox">
                <img src={this.props.imageSource}></img>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default VideoBox;
