import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

function reducer(state, action){
    if(action.type === "ADD"){
        console.log("IN STORE ", action.name);
        return addContact(state, action.name);
    }

    return state;
}

function addContact(state, name) {
    return {
        ...state,
        contacts: state.contacts.concat([{name: name}]),
    }
}

const initialState = {
    contacts: [{name:"Ori"},{name:"Roni"}],
};

export const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk));