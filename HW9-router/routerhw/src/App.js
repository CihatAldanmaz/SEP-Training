import React from 'react';

import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import TodoList from './components/TodoList';


function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/todolist">TodoList</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/todolist">
              <TodoList />
            </Route>
          </Switch>

        </header>
      </div>
    </Router>
  );
}

export default App;

