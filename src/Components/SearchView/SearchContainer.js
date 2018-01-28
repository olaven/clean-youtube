import React, { Component } from 'react';
import VideoBox from './VideoBox';
import InputBox from './InputBox';

class SearchContainer extends Component {
    handleVideoBox(){
        return (
            /*By Xanthous Onyx (Own work) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons*/
            [<VideoBox key="Painting" title="Paintings" imageSource="https://upload.wikimedia.org/wikipedia/commons/3/39/Oil_color%28Cadmium_Red_Medium_and_Pyrrol_Crimson%29.jpg"></VideoBox>,
            /*By Lars Steffens (Fisch) [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons*/
            <VideoBox key="Fish" title="Fish around the world" imageSource="https://upload.wikimedia.org/wikipedia/commons/6/65/Fisch_%289331263926%29.jpg"></VideoBox>,
            /*By user:Przykuta, corrected by Pharaoh Hound (Husky oczy 897.jpg) [GFDL (http://www.gnu.org/copyleft/fdl.html), CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/) or CC BY 2.5 (http://creativecommons.org/licenses/by/2.5)], via Wikimedia Commons*/
            <VideoBox key="Dog" title="Dogs eye" imageSource="https://upload.wikimedia.org/wikipedia/commons/8/8d/Siberian_Husky_heterchromia_edit.jpg"></VideoBox>]
        )
    }
    render() {
        let style = {
            /*child components are styled in their respective classes*/
            display: "inline-block",
            backgroundColor: "black"
        }
        return (
            <div className="SearchContainer" style={style}>
                <InputBox></InputBox>
                {this.handleVideoBox()}
            </div>
        );
    }
}

export default SearchContainer;
