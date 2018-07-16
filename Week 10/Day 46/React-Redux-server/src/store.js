import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

function reducer(state, action){
    if(action.type === "ADD"){
        console.log("IN STORE ", action.name);
        return addContact(state, action.name);
    }

    if(action.type === "SET_CONTACTS"){
        console.log("IN STORE ", action.contacts);
        return setContact(state, action.contacts);
    }

    return state;
}

function addContact(state, name) {
    return {
        ...state,
        contacts: state.contacts.concat([{name: name}]),
    }
}

function setContact(state, contacts) {
    return {
        ...state,
        contacts,
    }
}

const initialState = {
    contacts: null,
};

export const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk));