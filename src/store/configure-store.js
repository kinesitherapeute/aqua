import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import { createHistory } from 'history';
import DevTools from '../component/dev-tools';
import rootReducer from '../reducers';
const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(/*d1, d2, d3*/),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(combineReducers({routing: routeReducer , ...rootReducer}), initialState);
  const history = createHistory();
  syncReduxAndRouter(history, store);
  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
