import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoList from './components/TodoList/TodoList';
import Dashborad from './components/Dashboard/Dashboard';
import { withTodos } from './hoc/withTodos';
import TodoListRender from './components/RenderProps/TodoListRender';
class App extends React.Component {
  state = {
    activePage: 'TodoList',
  };

  handleChangeActivePage = (newActivePage) => {
    this.setState({
      activePage: newActivePage,
    });
  };

  render() {
    let content = null;
    switch (this.state.activePage) {
      case 'Dashboard':
        content = <TodoListRender render={(HandleAddTodo, handleRemoveTodo, todolist) =>
        (<Dashborad todolist={todolist}/>)
        }/>;
        break;
      case 'TodoList':
        content = <TodoListRender render={(HandleAddTodo, handleRemoveTodo, todolist) =>
          (<TodoList HandleAddTodo={HandleAddTodo} handleRemoveTodo={handleRemoveTodo} todolist={todolist}/>)
          }/>;
        break;
      default:
        break;
    }

    return (
      <Layout handleChangeActivePage={this.handleChangeActivePage}>
        {content}
      </Layout>
    );
  }
}

export default App;
