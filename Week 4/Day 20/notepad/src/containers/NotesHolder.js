import React, { Component } from 'react';

import CoolDiv from './../components/CoolDiv'
import CoolBtn from './../components/CoolButton'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            notes: ['Pokemon Names','Hello There','Dark Souls Tip'],
            notesContent: {'Pokemon Names': 'Pikachu',
                'Hello There': 'General Kenobi',
                'Dark Souls Tip': 'Git Gud'}
        };
    }

    decideTextContent = (text) => {

        const notes = this.state.notesContent;

        this.props.updateTextCallback(this.state.notesContent[text]);
    };

    saveNewNote = () => {
        let newList = this.state.notes;

        newList.push('Note Number ' + (newList.length+1));

        this.setState({notes : newList});
        this.props.saveNewNoteCallback();
    };

    render() {
        return (
            <div>
                {
                    this.state.notes.map((title, idx)=>{
                    return <CoolDiv title={title} key={idx} decideTextContentCallback = {this.decideTextContent}></CoolDiv>
                }) //map
                }
                <CoolBtn text={'save note'} saveNewNoteCallback = {this.saveNewNote}></CoolBtn>
            </div>
        );
    }
}

export default App;
