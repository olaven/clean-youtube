import React, { Component } from 'react';
import KeybindBox from './KeybindBox';

class KeybindContainer extends Component {
    handleKeyBindBoxes(){
        return ( // placeholder
            <KeybindBox action="toggle search" keybind="cmd + o"></KeybindBox>,
            <KeybindBox action="toggle GUI" keybind="cmd + g"></KeybindBox>,
            <KeybindBox action="select" keybind="enter"></KeybindBox>,
            <KeybindBox action="next" keybind="tab"></KeybindBox>
        )
    }
    render() {
        return (
            <div>
                {this.handleKeyBindBoxes()}
            </div>
        );
    }
}

export default KeybindContainer;
