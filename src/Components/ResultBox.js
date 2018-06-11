import React, { Component } from "react";
import PropTypes from 'prop-types'; 

class ResultBox extends Component 
{
    componentDidMount()
    {
        
    }
    render() 
    {
        return <div className="ResultBox">
            <h2>{this.props.title}</h2>
            <img src={this.props.image}></img>
        </div>
    }
}

ResultBox.propTypes = 
{
    title : PropTypes.string, 
    image : PropTypes.string
}
export default ResultBox; 