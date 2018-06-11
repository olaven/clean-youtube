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
  render()
  {
    return <div className="App">
      <Search handleSearch={this.search.bind(this)}/>
      <iframe></iframe>
    </div>
  }
}

export default App; 