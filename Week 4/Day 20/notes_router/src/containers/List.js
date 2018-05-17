import React, { Component } from 'react';

import {BrowserRouter, Link, Route} from 'react-router-dom';

class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {title: 'Pokemon Names'
                    ,id: 1
                },
                {title: 'Hello There'
                    ,id:2},
                {title: 'Dark Souls Tip'
                    ,id:3}
            ]
        };
    }

    getList() {
        return this.state.items.map (item => <li id={item.id}> {item.id} : {item.title}</li>);
    }

    render() {
        return (
            <ul>
                {this.getList()}
            </ul>
        );
    }
}

export default List;
