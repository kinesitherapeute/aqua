import React from 'react';
import ReactDOM from 'react-dom';
import{ compose, createStore, combineReducers } from 'redux';
import reducers from './reducers';

import { Provider, connect } from 'react-redux';
const store = createStore(combineReducers(reducers))

import App from './App';


const Appl = connect(state => {
    return state.staticSite
})(App)
// render the app
ReactDOM.render(<Provider store={store}><Appl/></Provider>, document.getElementById('root'));
