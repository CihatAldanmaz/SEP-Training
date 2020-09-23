/*  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => console.log(json)) */

///MVC 
const todoAPIs = (() => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos' 
    const getAllTodos = () => {
        fetch([baseUrl,todoPath].join('/')).then((res) => res.json());
    }
    return {
        getAllTodos,
    };
})(); 

const View = (() => {
    const domString ={
        todolist: '.todo__content'
    };

    const renderInnerHTML = (htmltemplate, element) => {
        element.innerHTML = htmltemplate;
    }
    const generateTodoListTemplate = function(todoArr) {
        let todoListTemplate = '';
        todoArr.forEach((todo) => {
            todoListTemplate += `<li class="todo__item">${todo.title}</li>`;
        });
        return todoListTemplate;
    }
    return {
        domString,
        generateTodoListTemplate,
        renderInnerHTML, 
    }
})(); 

const Model = ((api) => {
    class Todo {
        constructor(userId, id, title, completed){
            this.userId = userId;
            this.id = id; 
            this.title = title; 
            this.completed = completed;
        }
    }
    const fetchTodos = api.getAllTodos; 
    return {
        fetchTodos,
    };
})(todoAPIs); 

const AppController = ((view, model) => {
    const initTodolist = () => {
        model.fetchTodos().then((data) => {
            //generate template
            const tmp = view.generateTodoListTemplate(data);
            //find the element
            const todolistElement = document.querySelector(
                view.domString.todolist
            );
            //render
            view.renderInnerHTML(tmp, todolistElement); 
        })
    }
    
    const init = () => {
        console.log('init'); 
        initTodolist();
    };
    return {
        init,
    }

})(View, Model);


document.addEventListener("DOMContentLoaded", function () {
    AppController.init();
})