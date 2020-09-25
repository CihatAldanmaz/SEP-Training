import React from 'react';
import './App.css';
import {Provider} from 'react-redux';

import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header><h1>Todo List</h1></header>
        <TodoForm />
        <Todos /> 
      </div>
    </Provider>
  );
}

export default App;
