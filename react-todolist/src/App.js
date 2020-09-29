import React, {useState} from 'react';
import './App.css';
import Layout from './componenets/Layout/Layout';
import TodoList from './componenets/TodoList/TodoList';
import Dashborad from './componenets/Dashboard/Dashboard';

function App() {
  let content;
  const [activePage, setActivePage] = useState("Dashboard");

  if (activePage === "Dashboard") {
    content=<Dashborad></Dashborad>
  } else {
    content=<TodoList></TodoList>
  }

  const handleChangeActivePage=(newActivePage)=>{
    setActivePage(newActivePage);
  }

  return (
    <Layout handleChangeActivePage={handleChangeActivePage}>
      {content}
    </Layout>
  );
}

export default App;
