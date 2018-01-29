import React, { Component } from 'react';
//importing components from.. 
//SearchView: 
import SearchContainer from "./Components/SearchView/SearchContainer" 
import MainContainer from './Components/MainWindow/MainContainer';
import KeybindContainer from "./Components/KeybindView/KeybindContainer"


class App extends Component {
  constructor() {
    super(); 
    this.state = {//Mock data
      videos : [ //search results
        {
          title: "Paintings",
          ///*By Xanthous Onyx (Own work) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons*/
          imageSource:  "https://upload.wikimedia.org/wikipedia/commons/3/39/Oil_color%28Cadmium_Red_Medium_and_Pyrrol_Crimson%29.jpg"
        }, 
        {
          title: "Fish around the world!",
          //By Lars Steffens (Fisch) [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons
          imageSource: "https://upload.wikimedia.org/wikipedia/commons/6/65/Fisch_%289331263926%29.jpg"
        }, 
        {
          title: "Dogs eye", 
          //By user:Przykuta, corrected by Pharaoh Hound (Husky oczy 897.jpg) [GFDL (http://www.gnu.org/copyleft/fdl.html), CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/) or CC BY 2.5 (http://creativecommons.org/licenses/by/2.5)], via Wikimedia Commons
          imageSource: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Siberian_Husky_heterchromia_edit.jpg"
        }
      ],
      keybinds : [
        {
          action : "toggle search", 
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
  render() {
    let styles = {
      
    }
    return (
      <div style={styles} className="App">
        <MainContainer title={this.state.currentlyPlaying.title} videoSource={this.state.currentlyPlaying.videoSource}></MainContainer>
        <SearchContainer videos={this.state.videos}></SearchContainer>
        <KeybindContainer keybinds={this.state.keybinds}></KeybindContainer>
      </div>
    );
  }
}

export default App;
