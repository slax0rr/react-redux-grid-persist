import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { PersistGate } from 'redux-persist/es/integration/react';

import reducers from 'reducers';

import AppComponent from 'components/App';
import LoadingComponent from 'components/Loading';
import NotFoundComponent from 'components/NotFound';

const persistConfig = {
  key: 'financer-persistant-store',
  storage
}
const reducer = persistReducer(persistConfig, combineReducers(reducers))
let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    ) :
    compose(
      applyMiddleware(thunk),
    )
);
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<LoadingComponent />}>
      <Router>
        <Switch>
          <Route exact path="/" component={AppComponent} />
          <Route component={NotFoundComponent} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
