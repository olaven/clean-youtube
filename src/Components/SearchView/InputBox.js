import React, { Component } from 'react';

//importing yarn packages
//-validator -> for input 
import validator from 'validator';


class InputBox extends Component {
    
    constructor(props){
        super(props); 
        //manually binding to access this.props 
        this.recievingResults = this.recievingResults.bind(this); 
    }

    isValidInput(input){

        input = input.split(' '); 
        for(let i in input){
            if (!validator.isAlphanumeric(input[i], ['nn-NO'])){
                return false; 
            }
        }

        return true;
    }
    //i am getting the results as a callback
    recievingResults(results){                        
        this.props.addSearchResultsToState(results); 
    }

    render() {
        return (
            <input 
                className="InputBox" 
                type="text" 
                placeholder="keywords.."
                onChange={(event)=>{
                    if(this.isValidInput(event.target.value)){
                        this.props.getSearchResults(event.target.value, this.recievingResults) //from App.js 
                    }
                }}
                >
            </input>
        );
    }
}

export default InputBox;
