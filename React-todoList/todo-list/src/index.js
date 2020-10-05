import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

let store = createStore(rootReducer, applyMiddleware(thunk));
const unsubscribe = store.subscribe(() => console.log(store.getState()))
render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)