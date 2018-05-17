import React, { Component } from 'react';

class buttonComponent extends Component {

    constructor(props){
        super(props);
    }

    handleClick = (element) => {
        this.props.saveNewNoteCallback();
    };

    render() {
        return (
            <button onClick={this.handleClick}>{this.props.text}</button>
        );
    }
}

export default buttonComponent;


