import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout'
import TodoList from './components/TodoList/TodoList'
function App() {
  return (
    <>
    <Layout>
      <TodoList></TodoList>
    </Layout>
    </>
  );
}

export default App;
