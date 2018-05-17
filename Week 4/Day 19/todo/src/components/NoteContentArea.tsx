import * as React from 'react';

interface ITextArea {
    text: string
}

const Text = (props: ITextArea) => {
    return (<textarea >{props.text}</textarea>);
};

export default Text;