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
                currentInput : '', 
                resultSectionVisible : true 
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
                link={toEmbedUrl(resultBox.link)}
                handleClick={this.props.changeVideo}
            />
        }); 
    }
    renderResultSection()
    {
        if(this.state.resultSectionVisible)
        {
            return <div className="searchResults">
                {this.renderVideoBoxes()}
            </div>;
        }
    }
    handleChange(event)
    {
        const value = event.target.value; 
        this.setState({
            currentInput : value, 
            resultSectionVisible : true
        })
    }
    handleKeyDown(event)
    {
        // escape key 
        if(event.keyCode === 27)
        {
            this.setState({
                resultSectionVisible : false
            }); 
        }
    }
    render() {
        return <div className="topBar" className="searchContainer" onKeyDown={this.handleKeyDown.bind(this)}>
            <input  
                className="searchInput" 
                type="text" 
                onChange={this.handleChange.bind(this)}
                onFocus={() => 
                {
                    this.setState({
                        resultSectionVisible : true
                    })
                }}
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
            {this.renderResultSection()}
        </div>
    }
}

VideoBox.propTypes = 
{
    handleSearch : PropTypes.func
}



export default Search; 


//regular YT-URL -> embed-friendly-URL
const toEmbedUrl = (url) => 
{
    return (url.replace("watch?v=", "/embed/"))
}