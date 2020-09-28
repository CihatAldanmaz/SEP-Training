import React from 'react';
import './App.css';
import Layout from './componenets/Layout/Layout';
import TodoList from './componenets/TodoList/TodoList';
import Dashborad from './componenets/Dashboard/Dashboard';

function App() {
  return (
    <Layout>
      <Dashborad></Dashborad>
      {/* <TodoList></TodoList> */}
    </Layout>
  );
}

export default App;
