import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const {todo, handleChange, handleSubmit} = this.props;

        return (
            <div className="App">
                <form onSubmit={handleSubmit}> 
                    <input  
                        type="text"
                        value={todo}
                        name="todo"
                        onChange={handleChange}
                    />
                    <button>Add</button>
                </form>
                
            </div>
        );
    }
    
  }
  
  export default TodoForm;