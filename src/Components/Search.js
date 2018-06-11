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
                [],
                currentInput : ''  
            }
        ); 
    }
    renderResultBoxes()
    {
        return this.state.resultBoxes.map(resultBox => 
        {
            console.log(resultBox); 
            return <ResultBox key={resultBox.id} title={resultBox.title} image={resultBox.thumbnails.default.url} link={resultBox.link}/>
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
                    this.props.handleSearch(this.state.currentInput, (results) => 
                    {
                        console.log(results); 
                        this.setState({
                            resultBoxes : results
                        })
                    }); 
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