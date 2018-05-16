import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Output from './Components/Output';
import ButtonsPannel from './Components/ButtonsPannel';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentNumber: 0,
            operator: '',
            result: 0,
        };
    }

    makeNumbers() {
        let numbers = [];

        for (let i=0; i<10; i++){
            numbers.push(i);
        }

        return numbers;
    }

    doOperation = (type) => {
        //this.setState({ currentNumber: this.state.currentNumber + parseInt(type) });
        // this.setState((prevState, currentState)=>{
        //     prevState.currentNumber += type;
        // });
    };

    updateNumber = (number) => {
        if (this.state.currentNumber !== 0){
            this.setState({currentNumber: this.state.currentNumber*10 + number});
        }
        else {
            this.setState({currentNumber: number});
        }
    };

    determineOperator = (operator) => {
        this.setState({operator: operator});
        this.setState({result: this.state.currentNumber});
        this.setState({currentNumber: 0});
    };

    showResult = () => {

        let res;
        let op = this.state.operator;

        switch (op){
            case '+':
                res = this.state.result + this.state.currentNumber;
                this.setState({result: this.state.result + this.state.currentNumber});
                this.setState({currentNumber: res});
                break;
        }
    };

  render() {

      let numbers = this.makeNumbers();

    return (
      <div className="App">

          <Output data = {this.state.currentNumber}></Output>
          <ButtonsPannel operation={this.determineOperator} updateNumber = {this.updateNumber} equals = {this.showResult} numbers = {numbers}>
          </ButtonsPannel>

        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
      </div>
    );
  }
}

export default App;
