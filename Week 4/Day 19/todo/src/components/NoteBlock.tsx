import * as React from 'react';

interface INoteItem {
    headline: string
    showInfoCallback: any
    isActive?: boolean
}

const NoteItem = (props: INoteItem) => {
    return (<div onClick={props.showInfoCallback}>{props.headline}</div>);
};

export default NoteItem;