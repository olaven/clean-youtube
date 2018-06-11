import React, { Component } from "react";
import PropTypes from 'prop-types'; 

class VideoBox extends Component 
{
    componentDidMount()
    {
        
    }
    render() 
    {
        return <div className="ResultBox" style={containerStyle} onClick={() => 
            {this.props.handleClick(this.props.link)}
        }>
            <h2>{this.props.title}</h2>
            <img src={this.props.image}></img>
        </div>
    }
}

const containerStyle = 
{
    margin : "20px", 
    padding: "10px",
    border : "solid", 
    textAlign : "center", 
    cursor : "pointer"
}

VideoBox.propTypes = 
{
    title : PropTypes.string, 
    image : PropTypes.string, 
    link : PropTypes.string, 
    handleClick : PropTypes.func
}
export default VideoBox; 