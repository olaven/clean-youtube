import React, { Component } from 'react';

class GUIBox extends Component {
    render() {
        return (
            <div className="GUIBox">
                <button className="Search-button">Toggle Search</button>
                <button className="Keybinds-button">View Keybinds</button>
            </div>
        );
    }
}

export default GUIBox;
