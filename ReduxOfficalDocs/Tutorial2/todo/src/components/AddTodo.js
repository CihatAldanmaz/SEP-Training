/**
 * AddTodo.js -- 就是<input/> + 按钮组件
 */

/**
 * AddTodo.js需要trigger changes to the store to add new todos.就是说一旦用户点击Add Todo按钮，产生一个ClickEvent给到EventHandler。
 * EventHandler需要dispatch一个action给store。
 * 
 * Therefore, it needs to be able to dispatch actions to the store.
 * 
 * 所以需要做下列事情：
 * 1. 创建action creator -- 在🔥../redux/actions里创建所有的action creator🔥
 * 2. 把AddTodo.js里的EventHandler和Store 🔥connect🔥起来，所以store和AddTodo.js能互相通信（AddTodo.js dispatch actions to store, store receive actions)
 */

import React from 'react';
import { addTodo } from '../redux/actions';
import { connect } from 'react-redux';

class AddTodo extends React.Component {
    //因为<input>有输入的内容，需要有地方存储输入的内容，所以要有state来存input内容
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }

    updateInput = input => {
        // console.log(input)
        this.setState({ input })
    }

    //在这个handleAddTodo方程里，我们要把点击按钮event让一个handler来处理，在这个handler里，我们要在event handler里触发一个dispatch
    //把这个点击的action发给store
    //同时，在这个action里记录好action的具体内容
    handleAddTodo = () => {
        //dispatches actions to add todo
        this.props.addTodo(this.state.input);   //在下面的代码，By passing {addTodo} to connect, our AddTodo.js component receives { addTodo } as a prop，
                                                //所以这里可以用this.props.addTodo
                            
        // sets state back to empty string
        this.setState({ input: "" });
    }

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>
            </div>
        )
    }
}


/**
 * Connect components
 * 
 * --> React redux provides a connect function for you to read values from the Redux Store(and re-read the values when the store updates)
 * 
 * This <AddTodo /> needs to trigger changes to the store to add new todos.
 * Therefore, it needs to be able to dispatch actions to the store. Here's how we do it:
 * 
 * By passing {addTodo} to connect, our component receives { addTodo } as a prop, 🔥🔥🔥🔥
 * and it will automatically dispatch the action when it’s called.🔥🔥🔥🔥
 * 
 * 
 * // We normally do like this:
    connect(
        mapStateToProps,------接收从store来的更新过的state
        mapDispatchToProps----发出action
    )(Component)
 */

export default connect(
    null,  //<<<<<<<<-----mapStateToProps--------------接收从store来的更新过的state
    { addTodo }   //<<<<<<<<-----mapDispatchToProps----发出action
)(AddTodo)






