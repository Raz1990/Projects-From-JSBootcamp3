import React, { Component } from 'react';
import '../App.css';

import NotesHolder from './../containers/NotesHolder'
import CoolTextArea from './../components/CoolTextArea'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentlyDisplayText : 'empty'
        };
    }

    updateText = (text) => {
        alert(text);
        this.setState({currentlyDisplayText : text});
    };

    saveNewNote = () => {

    };

    render() {
    return (
        <div id='wrapper'>
            <NotesHolder updateTextCallback = {this.updateText} saveNewNoteCallback = {this.saveNewNote}></NotesHolder>

            <CoolTextArea content={this.state.currentlyDisplayText}></CoolTextArea>
        </div>
    );
    }
}

export default App;
