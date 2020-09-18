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
    this.todos = this.todos.filter((todo) => todo.id !== di);
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
  constructor() {}
}

//Controller links user to system by handling user inputs
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());
