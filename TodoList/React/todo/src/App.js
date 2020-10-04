import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList'; 
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <TodoList />
      </Layout>
    </>
  );
}

export default App;
