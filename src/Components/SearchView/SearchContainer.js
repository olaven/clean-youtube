import React, { Component } from 'react';
import VideoInfo from './VideoInfo';
import InputBox from './InputBox';

class SearchContainer extends Component {
    render() {
        return (            
            <div className="SearchContainer">
                <InputBox></InputBox>
                <br/>
                {this.props.videos.map( (video) => {
                    return <VideoInfo title={video.title} imageSource={video.imageSource} key={video.title}></VideoInfo>
                })}
            </div>
        );
    }
}

export default SearchContainer;
