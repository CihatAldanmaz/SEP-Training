class Model {
    constructor() {
        //The state of the model, an array of todo objects, prepopulated with some data
        this.todos = [
            { id: 1, text: 'Buy a car', complete: false },
            { id: 2, text: 'Pay the bill', complete: true },
        ]
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback
    }

    addTodo(todoText) {
        //create the new incoming todo object
        const todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText,
            complete: false,
        }
        this.todos.push(todo);
    }

    editTodo(id, updateText) {
        this.todos = this.todos.map((todo) =>
            todo.id === id ? { id: todo.id, text: updateText, complete: todo.complete } : todo,
        )
    }

    //using filter() to filter out a todo
    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id != id)
    }

    toggleTodo(id) {
        this.todos = this.todos.map((todo) =>
            todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo,
        )
    }

}

class View {
    constructor() {
        //root element
        this.app = this.getElement('#root')

        //title of the app
        this.title = this.createElement('h1')
        this.title.textContent = 'Todos'

        //form, with a [type = "text"] input, and a submit button
        this.form = this.createElement('form');

        //input
        this.input = this.createElement('input');
        this.input.type = 'text';
        this.input.placeholder = 'Add todo';
        this.input.name = 'todo';

        //submit button
        this.submitButton = this.createElement('button');
        this.submitButton.textContent = 'Submit';

        //lists
        this.todoList = this.createElement('ul', 'todo-list');

        //append the input and submit button to the form
        this.form.append(this.input, this.submitButton);

        //append the title, form, and todo list to the app
        this.app.append(this.title, this.form, this.todoList);
    }

    //getter
    get _todoText() {
        return this.input.value;
    }

    //setter
    _resetInput() {
        this.input.value = '';
    }

    //create an element with an optional CSS class
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);

        return element;
    }

    //retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }

    displayTodos(todos) {
        //delete all nodes everything it is called; refreshing
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }

        //show the default message
        if (todos.length === 0) {
            const p = this.createElement('p');
            p.textContent = 'Todo list is now empty, add a new task.';
            this.todoList.append(p);
        } else {
            //create nodes
            todos.forEach(todo => {
                const li = this.createElement('li');
                li.id = todo.id;

                const checkbox = this.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.complete;

                const span = this.createElement('span');
                span.contentEditable = true;
                span.classList.add('editable');

                if (todo.complete) {
                    const strike = this.createElement('s');
                    strike.textContent = todo.text;
                    span.append(strike);
                } else {
                    span.textContent = todo.text;
                }

                const deleteButton = this.createElement('button', 'delete');
                deleteButton.textContent = 'Delete';
                li.append(checkbox, span, deleteButton);

                //append nodes
                this.todoList.append(li);
            })
        }
    }

    //Need to put event listeners on the DOM element in the view.
    bindAddTodo(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            if (this._todoText) {
                this._resetInput();
            }
        })
    }

    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        })
    }

    bindToggleTodo(handler) {
        this.todoList.addEventListener('change', event => {
            if (event.target.type === 'checkbox') {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        })
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        //Explicit this binding
        this.model.bindTodoListChanged(this.onTodoListChanged)

        //display the initial todos
        this.onTodoListChanged(this.model.todos);
        
    }
    
    onTodoListChanged = (todos) => {
        this.view.displayTodos(todos);
    }

    //event handlers
    handleAddTodo = (todoText) => {
        this.model.addTodo(todoText);
    }
    handleEditTodo = (id, todoText) => {
        this.model.editTodo(id, todoText);
    }
    handleDeleteTodo = (id) => {
        this.model.deleteTodo(id);
    }
    handleToggleTodo = (id) => {
        this.model.toggleTodo(id);
    }

}

const app = new Controller(new Model(), new View());