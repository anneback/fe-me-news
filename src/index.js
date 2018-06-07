import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import { uiReducer, dataReducer } from './reducers';
import * as ducks from './ducks';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  ui: uiReducer,
  data: dataReducer,
  ...ducks.ui.reducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
