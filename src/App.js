import React, { Component } from 'react';
//importing components from.. 
//SearchView: 
import SearchContainer from "./Components/SearchView/SearchContainer" 
import MainContainer from './Components/MainWindow/MainContainer';
import KeybindContainer from "./Components/KeybindView/KeybindContainer"

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
        {
          title: "Paintings",
          ///*By Xanthous Onyx (Own work) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons*/
          imageSource:  "https://upload.wikimedia.org/wikipedia/commons/3/39/Oil_color%28Cadmium_Red_Medium_and_Pyrrol_Crimson%29.jpg",
          //Episode #96 of Hello Internet
          videoSource: "https://www.youtube.com/watch?v=-ydhwvvMvYo"
        }, 
        {
          title: "Fish around the world!",
          //By Lars Steffens (Fisch) [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons
          imageSource: "https://upload.wikimedia.org/wikipedia/commons/6/65/Fisch_%289331263926%29.jpg", 
          //Game Score Fanfare -> Yoshi's Halcyon Music 
          videoSource: "https://www.youtube.com/watch?v=JzSfTECTfIQ"
        }, 
        {
          title: "Dogs eye", 
          //By user:Przykuta, corrected by Pharaoh Hound (Husky oczy 897.jpg) [GFDL (http://www.gnu.org/copyleft/fdl.html), CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/) or CC BY 2.5 (http://creativecommons.org/licenses/by/2.5)], via Wikimedia Commons
          imageSource: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Siberian_Husky_heterchromia_edit.jpg",
          //Train Driver's View -> Awesome Train Journey on Snow go through 1 Tunnel
          videoSource: "https://www.youtube.com/watch?v=eIw3c7WZvgE"
        }
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
        title: "The Design of Breath of The Wild's Great Plateau",
        videoSource: "https://www.youtube.com/embed/RECRuY8L3FQ"
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

  changeVideo(title, videoSource) {
    this.setState({
      currentlyPlaying: {
        title: title,
        videoSource: videoSource
      }
    });
    console.log(this.state.currentlyPlaying);
  }

  //return SearchView and/or KeyBindView dependig on wether they are activated
  handleViews(){
    if (this.state.views.SearchView){
      return (
        <SearchContainer 
          videos={this.state.videos}
          changeVideo={this.changeVideo.bind(this)}>
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
    let styles = {
      
    }
    return (
      <div style={styles} className="App" onKeyDown={this.handleKeyDown.bind(this)} onKeyUp={this.handleKeyDown.bind(this)}>;
        <MainContainer 
          title={this.state.currentlyPlaying.title} 
          videoSource={this.state.currentlyPlaying.videoSource}
          //"bind()" makes "this" in function always refer to "App.js"
          toggleSearchView={this.toggleSearchView.bind(this)}
          toggleKeybindView={this.toggleKeybindView.bind(this)}>
        </MainContainer>
        {this.handleViews()}
      </div>
    );
  }
}

export default App;
