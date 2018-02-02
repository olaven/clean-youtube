import React, { Component } from 'react';
import KeybindBox from './KeybindBox';

class KeybindContainer extends Component {
    render() {
        return (
            <div className="KeybindContainer">
                {this.props.keybinds.map(keybind => {
                    return <KeybindBox action={keybind.action} keybind={keybind.keybind} key={keybind.action}></KeybindBox>
                })}

                <p>
                    <br/>
                    <br/>
                    <br/>
                    <u>Made by: <a href="https://github.com/olaven">@olaven</a></u>
                </p>
            </div>
        );
    }
}

export default KeybindContainer;
