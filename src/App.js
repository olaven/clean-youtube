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
  keymap = {};
  constructor() {
    super();
    this.state = {//Mock data
      views: {
        SearchView: true,
        KeybindView: false
      },
      videos: [ //search results
        //obejct -> .title, .imageSource, .videoSource

      ],
      keybinds: [
        {
          action: "toggle search",
          keybind: "a + u"
        },
        {
          action: "view keybinds",
          keybind: "a + i"
        },
        {
          action: "toggle GUI",
          keybind: "a + o"
        }
      ],
      currentlyPlaying: {
        title: "Search for something",
        videoSource: ""
      },
      isGUIEnabled: true
    }
  }

  componentWillMount() {
    //keep track of what keys are being pressed 
    document.addEventListener("keydown", this.handleKeyEvent.bind(this));
    document.addEventListener("keyup", this.handleKeyEvent.bind(this));
    //keep keybinds available -> turn focus away from video 
    setInterval(()=>{
      document.getElementById("App").focus(); 
      console.log("hi");
      
    }, 500);
  }

  //passed: App -> MainContainer -> GUIBox
  toggleGUI() {
    this.setState({ isGUIEnabled: !this.state.isGUIEnabled });
  }
  toggleSearchView() {
    this.setState({
      views: {
        SearchView: !this.state.views.SearchView,
        KeyBindView: false
      }
    });
  }
  toggleKeybindView() {
    this.setState({
      views: {
        SearchView: false,
        KeybindView: !this.state.views.KeybindView
      }
    })
  }

  //handle keypresses
  handleKeyEvent(event) {
    this.keymap[event.keyCode] = (event.type === "keydown"); //true if currently down
    
    //a + u -> toggle search
    if (this.keymap[65] && this.keymap[85]) {
      this.toggleSearchView();
    }
    //a + i -> toggle keybinds
    if (this.keymap[65] && this.keymap[73]) {
      this.toggleKeybindView();
    }
    //a + o -> toggle GUI
    if (this.keymap[65] && this.keymap[79]) {
      this.toggleGUI();
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
  }
  //HACK: this solution is not pretty if it is followed
  getSearchResults(input, callback) {
    searchYoutube(input, opts, function (err, results) {
      if (err) return console.log(err);
      callback(results);
    });
  }
  addSearchResultsToState(results) {
    //if not video -> remove
    results = results.filter(result => {
      return (result.kind === "youtube#video");
    })

    //change state of video-list
    this.setState({
      videos: results.map(result => {
        return {
          title: result.title,
          imageSource: result.thumbnails.default.url,
          videoSource: result.link
        }
      })
    })
  }


  //return SearchView and/or KeyBindView dependig on wether they are activated
  handleViews() {
    if (this.state.views.SearchView) {
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
    if (this.state.views.KeybindView) {
      return (
        <KeybindContainer
          keybinds={this.state.keybinds}>
        </KeybindContainer>
      );
    }
  }

  render() {
    return (
      <div className="App" id="App">;
        <MainContainer
          title={this.state.currentlyPlaying.title}
          videoSource={this.state.currentlyPlaying.videoSource}
          isGUIEnabled={this.state.isGUIEnabled}
          //"bind()" makes "this" in function always refer to "App.js"
          toggleSearchView={this.toggleSearchView.bind(this)}
          toggleKeybindView={this.toggleKeybindView.bind(this)}
          toggleGUI={this.toggleGUI.bind(this)}
        >
        </MainContainer>
        {this.handleViews()}
      </div>
    );
  }
}

export default App;
