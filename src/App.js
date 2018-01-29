import React, { Component } from 'react';
//importing components from.. 
//SearchView: 
import SearchContainer from "./Components/SearchView/SearchContainer" 
import MainContainer from './Components/MainWindow/MainContainer';
import KeybindContainer from "./Components/KeybindView/KeybindContainer"



class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer></MainContainer>
        <SearchContainer></SearchContainer>
        <KeybindContainer></KeybindContainer>
      </div>
    );
  }
}

export default App;
