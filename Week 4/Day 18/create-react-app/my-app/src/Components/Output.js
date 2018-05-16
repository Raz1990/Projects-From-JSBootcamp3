import React, { Component } from 'react';

class Output extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="Output">
                <h1>{this.props.data}</h1>
            </div>
        );
    }
}

export default Output;
