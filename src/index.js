import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

import App from './components/app';
import reducers from './reducers';
import { PIN_IT_TOKEN_KEY, OAUTH_TOKEN, OAUTH_TOKEN_SECRET, IS_AUTHORIZED } from './constants/pin-it-constants';
import { TEST_AUTHORIZATION_URI } from './actions/uris';
import { IS_USER_AUTHENTICATED, USER_DATA } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const tokenData = JSON.parse(localStorage.getItem(PIN_IT_TOKEN_KEY));

if(tokenData) {
  axios.get(`${TEST_AUTHORIZATION_URI}?${OAUTH_TOKEN}=${tokenData[OAUTH_TOKEN]}&${OAUTH_TOKEN_SECRET}=${tokenData[OAUTH_TOKEN_SECRET]}`)
       .then(response => {
         if(response.data[IS_AUTHORIZED]) {
           store.dispatch({type:IS_USER_AUTHENTICATED, payload:true})
           store.dispatch({ type:USER_DATA, payload: tokenData });
         }
         renderDOM();
       }).catch(() => {
         localStorage.removeItem(PIN_IT_TOKEN_KEY);
         store.dispatch({ type:IS_USER_AUTHENTICATED, payload:false });
         store.dispatch({ type:USER_DATA, payload: null });
         renderDOM();
       })
} else {
  renderDOM();
}

function renderDOM() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.querySelector('.main-container'));
}