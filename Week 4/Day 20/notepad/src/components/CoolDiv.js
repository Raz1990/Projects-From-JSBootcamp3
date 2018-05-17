import React, { Component } from 'react';

class divComponent extends Component {

    constructor(props){
        super(props);
    }

    handleClick = (element) => {
        alert(element.target.innerText);
        this.props.decideTextContentCallback(element.target.innerText);
    };

    render() {
        return (
            <div onClick={this.handleClick}>{this.props.title}</div>
        );
    }
}

export default divComponent;


