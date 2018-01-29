import React, { Component } from 'react';

class KeybindBox extends Component {
    render() {
        return (
            <div className="KeybindBox">
                {this.props.action} - {this.props.keybind}
            </div>
        );
    }
}

export default KeybindBox;
