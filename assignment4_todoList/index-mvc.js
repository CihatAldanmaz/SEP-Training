
const View = (()=>{

})();

const Model = (()=>{
    const todos = [
        {id: 1, text: "Buy dinner", complete: false},
        {id: 2, text: "Buy lunch", complete: false}
    ]

    const addTodo = (todoText) => {
        const todo = {
            id: todos.length > 0 ? todos[todos.length-1].id+1 : 1,
            text: todoText,
            complete: false,
        }
        todos.push(todo);
    }

    const deleteTodo = (id) => {
        todos = todos.filter((todo)=> todo.id !== id);
    }

    const toggleTodo = (id) => {
        todos = todos.map((todo)=> {return todo.id === id ? {id:todo.id, text:todo.text, complete: !todo.complete} : todo});
    }
    return {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo
    }
})();

const Controller = ((view, model)=>{

})(View, Model);

document.addEventListener('DOMContentLoaded', function () {
    Controller.init();
  });