import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {add} from "./actions";

class App extends Component {
    render() {
        const ul = this.getContactsUL();

        return (
            <div className="App">
                {ul}
                <button onClick={this.props.onAdd}>Add Udi</button>
            </div>
        );
    }

    getContactsUL() {
        return <ul>{this.props.contacts.map ((contact,idx) => {
            return <li key={idx}>{contact.name}</li>
        })}</ul>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        contacts: state.contacts,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAdd: () => {
            dispatch(add("Udi"))
        },
    }
};

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default ConnectedApp;
