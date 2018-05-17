import * as React from 'react';
import '../App.css';

// import logo from './logo.svg';

import Notes from './Notes';
import NoteContentArea from "../components/NoteContentArea";

interface IAppState {
    name: string
    currentTextShown: string
}

const updateText = (event: any) => {
    this.setState({
        currentTextShown: event.target.innerText
    });
};


class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            name: 'Raz',
            currentTextShown: ''
        }
    }

    public render() {
        return (
            <div>
                <div id="header">
                    <span>Welcome, </span>{this.state.name}
                </div>
                <br />

                <Notes updateTextCallback={updateText}/>
                <NoteContentArea text={this.state.currentTextShown}/>
            </div>
        );
    }
}

export default App;
