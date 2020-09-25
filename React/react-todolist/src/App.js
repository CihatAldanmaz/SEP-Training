import React from 'react';
import './App.css';
import Layout from './componenets/Layout/Layout';
import TodoList from './componenets/TodoList/TodoList';

function App() {
  return (
    <Layout>
      <TodoList></TodoList>
    </Layout>
  );
}

export default App;
