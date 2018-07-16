const {createStore} = require("redux");
const {rootReducer} = require("./reducers");

const initialState = {
    result: 0
};

const store = createStore(rootReducer, initialState);
const ele = document.getElementById("res");

store.subscribe(() => {
    ele.innerText = store.getState().result;
});

module.exports = {
    store
};