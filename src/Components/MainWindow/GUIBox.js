import React, { Component } from 'react';

class GUIBox extends Component {
    render() {
        return (
            <div className="GUIBox">
                <button className="Search-button" onClick={this.props.toggleSearchView}>Toggle Search</button>
                <button className="Keybinds-button" onClick={this.props.toggleKeybindView}>View Keybinds</button>
            </div>
        );
    }
}

export default GUIBox;
