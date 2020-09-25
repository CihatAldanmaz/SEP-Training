import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from './redux/reducers';

let store = createStore(rootReducer);
const unsubscribe = store.subscribe(() => console.log(store.getState()))
render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)