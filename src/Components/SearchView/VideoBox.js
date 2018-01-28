import React, { Component } from 'react';

class VideoBox extends Component {
    render() {

        //styling 
        let style = {
            img : {
                left : "0vw",
                height : "5vh"
            }, 
            h1 : {
                position : "absolute",
                fontSize : "1.2em",
                margin : "0",
                color: "grey",
                left: "5vw"
            }
        }

        return (
            <div className="VideoBox">
                <img src={this.props.imageSource} style={style.img}></img>
                <h1 style={style.h1}>{this.props.title}</h1>
            </div>
        );
    }
}

export default VideoBox;
