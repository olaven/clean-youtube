import React, { Component } from 'react';
import VideoBox from './VideoBox';
import InputBox from './InputBox';

class SearchContainer extends Component {
    render() {
        return (            
            <div className="SearchContainer">
                <InputBox></InputBox>
                <br/>
                {this.props.videos.map( (video) => {
                    return <VideoBox title={video.title} imageSource={video.imageSource}></VideoBox>
                })}
            </div>
        );
    }
}

export default SearchContainer;
