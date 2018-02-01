//importing yarn packages 
//-youtube-search (abstraction for api)
import searchYoutube from 'youtube-search';

import React, { Component } from 'react';
//importing components from.. 
//-SearchView: 
import SearchContainer from "./Components/SearchView/SearchContainer" 
import MainContainer from './Components/MainWindow/MainContainer';
import KeybindContainer from "./Components/KeybindView/KeybindContainer"

//youtube-API-options
let opts = {
  maxResults: 20,
  key: process.env.REACT_APP_SEARCH_API_KEY //ADD YOUR OWN KEY
};


class App extends Component {
  keymap = []; 
  constructor() {
    super(); 
    this.state = {//Mock data
      views : {
        SearchView : true,
        KeybindView : false 
      },
      videos : [ //search results
        //obejct -> .title, .imageSource, .videoSource
        
      ],
      keybinds : [
        {
          action : "toggle search", 
          keybind : "cmd + j"
        },
        {
          action : "view keybinds",
          keybind : "cmd + k"
        },
        {
          action: "toggle GUI",
          keybind: "cmd + g"
        },
        {
          action: "select",
          keybind: "enter"
        },
        {
          action: "next",
          keybind: "tab"
        }
      ], 
      currentlyPlaying : {
        title: "Search for something",
        videoSource: ""
      }
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this)); 
    document.addEventListener("keyup", this.handleKeyDown.bind(this)); 
  }

  //passed: App -> MainContainer -> GUIBox
  toggleSearchView() {
    this.setState({
      views : {
        SearchView : !this.state.views.SearchView,
        KeyBindView : false    
      }
    });      
  }

  toggleKeybindView() {
    this.setState({
      views : {
        SearchView : false,
        KeybindView: !this.state.views.KeybindView
      }
    }) 
  }

  //handle keypresses
  handleKeyDown(event) {    
    this.keymap[event.keyCode] = (event.type === "keydown"); //true if currently down        
    //cmd + j -> search
    if(this.keymap[74] && this.keymap[91]) {
      this.toggleSearchView();      
    }
    //cmd + k -> view keybinds
    if(this.keymap[75] && this.keymap[91]) {
      this.toggleKeybindView(); 
    }
  }

  //regular YT-URL -> embed-friendly-URL
  toEmbedUrl(url) {
    return (url.replace("watch?v=", "/embed/"))
  }

  changeVideo(title, videoSource) {
    this.setState({
      currentlyPlaying: {
        title: title,
        videoSource: this.toEmbedUrl(videoSource)
      }
    });
    console.log(this.state.currentlyPlaying.videoSource);
  }
  //HACK: this solution is not pretty if it is followed
  getSearchResults(input, callback){
    searchYoutube(input, opts, function (err, results) {      
      if (err) return console.log(err); 
      callback(results); 
    });  
  }
  addSearchResultsToState(results){
    //if not video -> remove
    results = results.filter(result => {
      return (result.kind === "youtube#video"); 
    })
    
    //change state of video-list
    this.setState({
      videos : results.map(result => {
        return {
          title : result.title,
          imageSource : result.thumbnails.default,
          videoSource : result.link
        }
      }) 
    })
  }


  //return SearchView and/or KeyBindView dependig on wether they are activated
  handleViews(){
    if (this.state.views.SearchView){
      return (
        <SearchContainer 
          videos={this.state.videos}
          changeVideo={this.changeVideo.bind(this)}
          getSearchResults={this.getSearchResults.bind(this)}
          addSearchResultsToState={this.addSearchResultsToState.bind(this)}
        >
        </SearchContainer>
      );
    }
    if (this.state.views.KeybindView){
      return (
        <KeybindContainer 
          keybinds={this.state.keybinds}>
        </KeybindContainer>
      );
    }
  }
  
  render() {
    return (
      <div className="App" onKeyDown={this.handleKeyDown.bind(this)} onKeyUp={this.handleKeyDown.bind(this)}>;
        <MainContainer 
          title={this.state.currentlyPlaying.title} 
          videoSource={this.state.currentlyPlaying.videoSource}
          //"bind()" makes "this" in function always refer to "App.js"
          toggleSearchView={this.toggleSearchView.bind(this)}
          toggleKeybindView={this.toggleKeybindView.bind(this)}
        >
        </MainContainer>
        {this.handleViews()}
      </div>
    );
  }
}

export default App;
