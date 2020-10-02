import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Todo from './components/Todo';

import store from './store'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // isDashboardClicked: true,
      // isTodoListClicked: false
    }
  }

  // handleDashBoard = () => {
  //   this.setState({
  //     isDashboardClicked: true,
  //     isTodoListClicked: false
  //   })
  // }

  // handleTodoList = () => {
  //   this.setState({
  //     isDashboardClicked: false,
  //     isTodoListClicked: true
  //   })
  // }

  render() {
    const {isDashboardClicked, isTodoListClicked} = this.state;
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
          <NavBar handleDashBoard={this.handleDashBoard} handleTodoList={this.handleTodoList} />
          
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/todolist" component={Todo} />
            </Switch>
          </Router>


          {/* {
            isDashboardClicked &&
            <Dashboard />
          }
          {
            isTodoListClicked &&
            <Todo />
          } */}

          
        </div>
      </Provider>
    );
  }
  
}

export default App;
