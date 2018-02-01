import React, { Component } from 'react';
import VideoInfo from './VideoInfo';
import InputBox from './InputBox';

class SearchContainer extends Component {
    render() {
        return (            
            <div className="SearchContainer">
                <InputBox
                    getSearchResults={this.props.getSearchResults}
                    addSearchResultsToState={this.props.addSearchResultsToState}
                ></InputBox>
                <br/>
                {this.props.videos.map( (video) => {
                    return (
                        <VideoInfo
                            title={video.title}
                            imageSource={video.imageSource}
                            videoSource={video.videoSource}
                            key={video.title}
                            changeVideo={this.props.changeVideo}>
                        </VideoInfo>
                    )
                })}
            </div>
        );
    }
}

export default SearchContainer;
