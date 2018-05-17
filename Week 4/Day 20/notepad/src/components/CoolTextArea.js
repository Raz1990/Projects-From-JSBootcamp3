import React, { Component } from 'react';

class textAreaComponent extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <textarea>{this.props.content}</textarea>
        );
    }
}

export default textAreaComponent;


