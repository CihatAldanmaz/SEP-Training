//Model manages the data & CRUD methods of application
class Model {
  constructor() {
    //the state of model, an array of todo objs
    this.todos = [
      { id: 1, text: "Finish MVC assignment", complete: false },
      { id: 2, text: "Study this weekend", complete: false },
    ];
  }

  addTodo(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    };
    this.todos.push(todo);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleComplete(id) {
    this.todos = this.todos.map((todo) => {
      return todo.id === id
        ? { id: todo.id, text: todo.text, complete: !todo.complete }
        : todo;
    });
  }
}

//View visually represents the model
class View {
  constructor() {
    //the root element
    this.app = this.getElement("#root");

    //the title of the app
    this.title = this.createElement("h1");
    this.title.textContent = "Todos";

    //the form, with type=text input and a submit button
    this.form = this.createElement("form");
    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.name = "todo";

    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Submit";

    //todo list representation
    this.todoList = this.createElement("ul", "todo-list");

    //append the input and submit button to the form
    this.form.append(this.input, this.submitButton);

    //appent the title, form, and todo list to app
    this.app.append(this.title, this.form, this.todoList);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = "";
  }

  displayTodo(todos) {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task";
      this.todoList.append(p);
    } else {
      todos.forEach((todo) => {
        const li = this.createElement("li");
        li.id = todo.id;

        const checkBox = this.createElement("input");
        checkBox.type = "checkbox";
        checkBox.checked = todo.complete;

        const span = this.createElement("span");
        span.contentEditable = true;
        if (todo.complete) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(checkBox, span, deleteButton);
        this.todoList.append(li);
      });
    }
  }
}

//Controller links user to system by handling user inputs
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());
