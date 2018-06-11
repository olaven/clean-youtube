import React, { Component } from "react";
import PropTypes from "prop-types"; 


// Components 
import ResultBox from './ResultBox';

/**
 * Is a bar across the top of the screen, for searching. 
 * Resulta of the search is displayed as boxes underneath, as user is typing 
 */
class Search extends Component {
    componentWillMount = () => 
    {
        this.setState(
            {
                resultBoxes : 
                [
                    {
                        title : "testvid", 
                        image: "https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg", 
                        id : 123
                    }                   
                ],
                currentInput : ''  
            }
        ); 
    }
    renderResultBoxes()
    {
        return this.state.resultBoxes.map(resultBox => 
        {
            return <ResultBox key={resultBox.id} title={resultBox.title} image={resultBox.image}/>
        }); 
    }
    handleChange(event)
    {
        const value = event.target.value; 
        this.setState({
            currentInput : value
        })
    }
    render() {
        return <div className="topBar" style={containerStyles}>
            <input  
                className="form-control" 
                type="text" 
                placeholder="search" 
                style={boxStyle}
                onChange={this.handleChange.bind(this)}
                onKeyDown={() => {
                    this.props.handleSearch(this.state.currentInput)
                }}
            >
            </input>
            {this.renderResultBoxes()}
        </div>
    }
}

ResultBox.propTypes = 
{
    handleSearch : PropTypes.func
}

const containerStyles = 
{
    position: 'fixed', 
    top  : '0',
    width : "100vw",
    height : '5%',
    backgroundColor : "red"
}

const boxStyle = 
{
    height : "70%", 
    width : "50%", 
    fontSize : "2em"
}

export default Search; 