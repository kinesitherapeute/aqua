import React from 'react';
import ReactDOM from 'react-dom';
import{ compose, createStore, combineReducers } from 'redux';
import reducers from './reducers';
import './style';
import { Provider} from 'react-redux';


import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';

const store = createStore(combineReducers({routing: routeReducer , ...reducers}))
const history = createHistory();
syncReduxAndRouter(history, store);

import App, {StaticApp, ReservationApp} from './App';
import NoMatch from './component/no-match';
// render the app
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={StaticApp}/>
            <Route path="reservations" component={ReservationApp}/>
            <Route path="*" component={NoMatch}/>
          </Route>

        </Router>
    </Provider>, document.getElementById('root'));
