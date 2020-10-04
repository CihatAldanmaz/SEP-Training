import React from 'react';

class TodoItem extends React.Component{
  render(){
    return(
        <li>
           {this.props.title} <button id={this.props.id} className="removerBtn" onClick={(e)=> this.props.remove(e.target.id) }>X</button>
        </li>
    );
  };
};

export default TodoItem;