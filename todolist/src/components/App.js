import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoList from "./TodoList";
import Counter from "./Counter";

function App() {
  // const [items, setItems] = useState([]);

  // function addItem(inputText) {
  //   setItems((prevItems) => {
  //     return [...prevItems, inputText];
  //   });
  // }

  // function deleteItem(id) {
  //   setItems((prevItems) => {
  //     return prevItems.filter(
  //       (item, index) => {
  //         return index !== id;
  //       }
  //     )
  //   });
  // }

  return (
    <div className="app-container">
      <div className="router-container">
        <Router>
        <div>
          <div className="top-nav">
            <ul>
              <li>
                <Link to="/todolist">To-do List</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
            </ul>
          </div>
            <Switch>
              <Route path="/todolist">
                <TodoList />
              </Route>
              <Route path="/counter">
                <Counter />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}


export default App;
