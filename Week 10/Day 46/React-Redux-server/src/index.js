import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {store} from "./store";
import {loadAllContacts} from "./actions";

store.subscribe(function () {
   console.log(store.getState());
});

store.dispatch(loadAllContacts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
