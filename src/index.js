import React from 'react';
import ReactDOM from 'react-dom';
import{ compose, createStore, combineReducers } from 'redux';
import reducers from './reducers';
import './style';
import { Provider} from 'react-redux';
const store = createStore(combineReducers(reducers))

import App from './App';



// render the app
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
