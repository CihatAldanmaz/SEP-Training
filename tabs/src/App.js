import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoList from './components/TodoList/TodoList';
import Dashboard from './components/Dashboards/Dashboard';
// import { withTodos } from './hoc/withTodos';
import ChildComp from './components/ChildComp/ChildComp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Layout>
//       {/* <Dashboard></Dashboard> */}
//       <TodoList></TodoList>
//     </Layout>
//   );
// }


class App extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      activePage: 'TodoList'
    };
    this.handleChangeActivePage = this.handleChangeActivePage.bind(this);
  }
  handleChangeActivePage(newActivePage) {
    this.setState({
      activePage: newActivePage
    })
  }
  render() {
    // let content = null;
    // switch (this.state.activePage) {
    //   case 'Dashboard':
    //     content = <ChildComp render={(todoList) => <Dashboard todoList={todoList} />} />
    //     // content = <Dashboard></Dashboard>;
    //     break
    //   case 'TodoList':
    //     content = <ChildComp render={(handleAddTodo, handleRemoveTodo, todoList) =>
    //       (<TodoList handleAddTodo={handleAddTodo} handleRemoveTodo={handleRemoveTodo} todoList={todoList} />)
    //     } />;
    //     // content = <TodoList></TodoList>;
    //     break;
    //   default:
    //     break;
    // }
    return (
      // <Layout handleChangeActivePage={this.handleChangeActivePage}>{content}</Layout>
      <Router>
        < Layout>
          <Switch>
            <Route exact path='/dashboard'>
              <ChildComp render={(todolist) => <Dashboard todolist={todolist} />} />
            </Route>
            <Route path='/todo'>
              <ChildComp render={(handleAddTodo, handleRemoveTodo, todoList) => <TodoList handleAddTodo={handleAddTodo} handleRemoveTodo={handleRemoveTodo} todoList={todoList} />
              } />
            </Route>
          </Switch>
        </Layout>
      </Router>
    )
  }
}
export default App;
