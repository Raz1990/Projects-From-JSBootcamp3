import React, { Component } from 'react';

class ButtonsPannel extends Component {

    constructor(props){
        super(props);
    }

    add = (event) =>{
        this.props.operation(event.currentTarget.textContent);
    };

    returnNumber = (event) => {
        this.props.updateNumber(parseInt(event.currentTarget.textContent));
    };

    returnOperator = (event) =>{
        this.props.operation(event.currentTarget.textContent);
    };

    calculate = (event) =>{
        this.props.equals();
    };

    render() {

        for (let number of this.props.numbers){
            //alert(number);
        }

        let buttonStyle = {
            width: 47,
        }

        return (
            <div className="ButtonsPannel">
                <h1>buttons</h1>
                <button onClick={this.returnNumber}> {this.props.numbers[7]}</button>
                <button onClick={this.returnNumber}> {this.props.numbers[8]}</button>
                <button onClick={this.returnNumber}> {this.props.numbers[9]}</button>
                <button> / </button>
                <br/>
                <button onClick={this.returnNumber}> {this.props.numbers[4]}</button>
                <button onClick={this.returnNumber}> {this.props.numbers[5]}</button>
                <button onClick={this.returnNumber}> {this.props.numbers[6]}</button>
                <button> * </button>
                <br/>
                <button onClick={this.returnNumber}> {this.props.numbers[1]}</button>
                <button onClick={this.returnNumber}> {this.props.numbers[2]}</button>
                <button onClick={this.returnNumber}> {this.props.numbers[3]}</button>
                <button> - </button>
                <br />
                <button onClick={this.returnNumber}> {this.props.numbers[0]}</button>
                <button style={buttonStyle} onClick={this.calculate}> = </button>
                <button onClick={this.returnOperator}>+</button>
            </div>
        );
    }
}

export default ButtonsPannel;
