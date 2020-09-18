const todos = [
    {
        text: 'Laundry',
        complete: false
    },
    {
        text: 'Shopping',
        complete: false
    },
    {
        text: 'Reading',
        complete: false
    }
];

const Model = (() => {
    const addTodo = (input) => {
        todos.push({ text: input, complete: false });
    }
    const checkTodo = (index) => {
        todos[index].complete = true
    }
    const deleteTodo = (index) => {
        console.log(index);
        todos.splice(index, 1);
    }
    return {
        addTodo, checkTodo, deleteTodo
    }
})()

const View = (() => {
    const domString = {
        todoBody: '.todo-body'
    };
    const intialTodoTmp = function () {
        const todoTmp = document.createElement('ul')
        todoTmp.className = 'todo-list';

        todos.forEach((todo) => {
            const todoItem = document.createElement('li');
            const todoCheck = document.createElement('input');
            const todoButton = document.createElement('button');
            const todoLabel = document.createElement('label')

            todoCheck.type = 'checkbox';
            todoCheck.className = 'check';
            todoLabel.innerText = todo.text;
            todoItem.className = 'todo-item';
            todoButton.className = 'delete';
            todoButton.innerHTML = 'x';

            todoItem.appendChild(todoCheck);
            todoItem.appendChild(todoLabel);
            todoItem.appendChild(todoButton);

            todoTmp.appendChild(todoItem);
        })
        return todoTmp;
    }

    const getChildElement = function () {
        const todoTmp = document.querySelector('.todo-body');
        console.log(todoTmp);
    }

    const bindAddtoDo = (callback) => {
        const submitButton = document.getElementById('todo-button');
        const todoText = document.getElementById('todo-input').value;

        submitButton.addEventListener('click', function () {
            callback(todoText);
        })
    }

    const bindChecktoDo = (callback) => {
        const checkBox = document.getElementsByClassName('check');
        for (let i = 0; i < checkBox.length; i++) {
            checkBox[i].addEventListener('click', function () {
                callback(i);
            })
        }
    }

    const binddeletetoDo = (callback) => {
        const deleteButton = document.getElementsByClassName('delete');
        for (let i = 0; i < deleteButton.length; i++) {
            deleteButton[i].addEventListener('click', function () {
                callback(i);
            })
        }
    }
    return {
        domString, intialTodoTmp, getChildElement, bindAddtoDo, bindChecktoDo, binddeletetoDo
    }
})()

const Controller = ((model, view) => {
    const render = (htmlTemplate, element) => {
        element.appendChild(htmlTemplate);
    }

    const removeRender = (element) => {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    const initTodos = () => {
        const tmp = view.intialTodoTmp();
        const element = document.querySelector(view.domString.todoBody);
        render(tmp, element);
    }

    const clearTodos = () => {
        const tmp = view.getChildElement();
        const element = document.querySelector(view.domString.todoBody);
        removeRender(element);
    }

    const init = () => {
        console.log('init');
        initTodos();
        view.bindAddtoDo(handleAddtoDo);
        view.bindChecktoDo(handleChecktoDo);
        view.binddeletetoDo(handleDeletetoDo);
        console.log(todos);
    }
    const handleAddtoDo = (text) => {
        clearTodos();
        console.log('add to do');
        model.addTodo(text);
        initTodos();
        view.binddeletetoDo(handleAddtoDo);
        view.binddeletetoDo(handleDeletetoDo);
        view.binddeletetoDo(handleDeletetoDo);
        console.log(todos);
    }
    const handleChecktoDo = (i) => {
        clearTodos();
        console.log('check to do');
        model.checkTodo(i);
        initTodos();
        view.bindChecktoDo(handleChecktoDo);
        console.log(todos);
    }
    const handleDeletetoDo = (i) => {
        clearTodos();
        console.log('delete to do');
        model.deleteTodo(i);
        initTodos();
        view.binddeletetoDo(handleDeletetoDo);
        console.log(todos);
    }
    return {
        init
    }

})(Model, View)

Controller.init();