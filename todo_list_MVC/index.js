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
}

//Controller links user to system by handling user inputs
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());
