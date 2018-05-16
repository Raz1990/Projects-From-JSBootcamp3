import React, { Component } from 'react';

class ButtonComponent extends Component {

    constructor(props){
        super(props);
    }

    addFour = () =>{

    }

    render() {
        return (
            <button onClick={this.addFour}>{this.number}</button>
        );
    }
}

export default ButtonComponent;
