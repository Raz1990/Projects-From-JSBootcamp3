import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom'


import List from "./../containers/List";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [{title: 'sdf', id: 789}, {title: 'gggg', id: 456}]
        };
    }

    render() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/list'>List</Link></li>
                        <li><Link to='/Category3'>Category: DarkSouls Tip</Link></li>
                    </ul>
                </nav>
                <section>
                    <Route path='/list' name='list' render={({match}) => (
                        <List match={match}/>
                    )}/>
                </section>
            </div>
        </BrowserRouter>
    );
    }
}

export default App;
