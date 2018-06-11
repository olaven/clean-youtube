import React, { Component } from "react";
import PropTypes from "prop-types"; 

// Components 
import VideoBox from './VideoBox';

import './Search.css'; 

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
    renderVideoBoxes()
    {
        return this.state.resultBoxes.map(resultBox => 
        {
            return <VideoBox 
                key={resultBox.id} 
                title={resultBox.title} 
                image={resultBox.thumbnails.default.url} 
                link={resultBox.link}
                handleClick={this.props.changeVideo}
            />
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
        return <div className="topBar" className="searchContainer">
            <input  
                className="searchInput" 
                type="text" 
                onChange={this.handleChange.bind(this)}
                onKeyDown={() => {
                    // calls the search method in App.js, with the callback specified below 
                    this.props.handleSearch(this.state.currentInput, (results) => 
                    {
                        // filter out channels // REFACTOR: could be more elegant 
                        let videos = []; 
                        for(let result of results)
                        {
                            if(result.kind === "youtube#video")
                            {
                                videos.push(result); 
                            }
                        }
                        // Update state / view on screen 
                        this.setState({
                            resultBoxes : videos
                        })
                    }); 
                }}
            >
            </input>
            <div className="searchResults">
                {this.renderVideoBoxes()}
            </div>
        </div>
    }
}

VideoBox.propTypes = 
{
    handleSearch : PropTypes.func
}



export default Search; 