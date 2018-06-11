import searchYoutube from "youtube-search";

import React, { Component } from "react";

// Stylesheet 
import './App.css'; 
// Components
import Search from './Components/Search'; 



class App extends Component
{
  /**
   * Called from subcomponents.
   * @param {string} term to search for 
   */
  search(term)
  {
    const opts = {
      maxResults : 10, 
      key: 'AIzaSyAoNtNykGJF461BTg5uhI8P4c1UvgB93ho'
    }
    searchYoutube('jsconf', opts, (err, results) => 
    {
      if(err) return console.log(err); 
      console.dir(results); 
    }); 
  }
  render()
  {
    console.log(process.env.YOUTUBE_API_KEY); 
    console.log(process.env); 

    return <div className="App">
      <Search handleSearch={this.search.bind(this)}/>
      <iframe></iframe>
    </div>
  }
}

export default App; 