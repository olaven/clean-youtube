import searchYoutube from "youtube-search";

import React, { Component } from "react";

// Stylesheet 
import './App.css'; 
// Components
import Search from './Components/Search'; 



class App extends Component
{
  componentWillMount()
  {
    this.setState({
      currentVideo : "" 
    })
  }
  /**
   * Called from subcomponents.
   * @param {string} term to search for 
   * @param {function} callback called with 'results' as parameters
   */
  search(term, callback)
  {
    const opts = {
      maxResults : 10, 
      key: 'AIzaSyAoNtNykGJF461BTg5uhI8P4c1UvgB93ho'
    }
    searchYoutube(term, opts, (err, results) => 
    {
      if(err) return console.log(err); 
      callback(results); 
    }); 
  }
  /**
   * Changes the displayed video in main window
   * Called from subcomponents
   * @param {string} source source of video
   */
  changeVideo(source)
  {
    this.setState({
      currentVideo : source
    })
  }
  render()
  {
    return <div className="App">
      <Search handleSearch={this.search.bind(this)} changeVideo={this.changeVideo.bind(this)}/>
      <iframe className="videoFrame" src={this.state.currentVideo}></iframe>
    </div>
  }
}

export default App; 