import * as React from 'react';

import NoteBlock from './../components/NoteBlock';

interface INoteProps {
    updateTextCallback: any
}

interface INoteState {
    notes: string[]
}

function showNoteContent(event: any) {
    console.log(event.target.innerText);
}

class Notes extends React.Component<INoteProps, INoteState> {
    constructor(props: INoteProps) {
        super(props);

        this.state = {
            notes: ['Pokemon Names', 'Hello There...', 'Dark Souls Tip']
        }
    }

    public render() {
        const noteItems = this.state.notes.map((item, idx) => {
            return (<NoteBlock key={idx} headline={item} showInfoCallback={showNoteContent}/>);
        });

        return (
            <ul>{noteItems}</ul>
        );
    }
}

export default Notes;
