//define the apis
const todoAPIs = (() => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const todoPath = "todos";

  const getAllTodos = async () => {
    const res = await fetch([baseUrl, todoPath].join("/"));
    return res.json();
  };

  const deleteTodo = async (id) => {
    return await fetch([baseUrl, todoPath, id].join("/"), {
      method: "DELETE",
    }).then((res) => {
      return res.json();
    });
  };
  return {
    getAllTodos,
    deleteTodo,
  };
})();

//View handles the DOM rendering.
const View = (() => {
  const domString = {
    todoList: ".todoList__content",
  };

  const renderInnerHTML = (htmlTemplate, element) => {
    element.innerHTML = htmlTemplate;
  };

  const generateTodoListTmpt = function (todoArr) {
    let todoListTmpt = "";
    todoArr.forEach((todo) => {
      todoListTmpt += `<li id=${todo.id}class='todolist__content-item'><span>${todo.title}</span><button class='btn-remove'>X</button></li>`;
    });
    return todoListTmpt;
  };

  return {
    domString,
    renderInnerHTML,
    generateTodoListTmpt,
  };
})();

const Model = ((api) => {
  class Todo {
    constructor(userId, id, title, completed) {
      this.userId = userId;
      this.id = id;
      this.title = title;
      this.completed = completed;
    }
  }

  const fetchTodos = api.getAllTodos;
  const deleteTodos = api.deleteTodos;

  return {
    fetchTodos,
    deleteTodos,
  };
})(todoAPIs);

const Controller = ((view, model) => {
  class State {
    constructor() {
      this._todolist = [];
    }
    get todoList() {
      return this._todolist;
    }

    set todoList(newList) {
      this._todolist = newList;
      //rerender
      //regenerate template with updated list
      const tmpt = view.generateTodoListTmpt(this._todolist);

      //find the element
      const todoListElement = document.querySelector(view.domString.todoList);

      //render
      view.renderInnerHTML(tmpt, todoListElement);
    }
  }

  const state = new State();

  const initTodoList = () => {
    //fetch data
    model.fetchTodos().then((data) => {
      state.todoList = data;

      const todoListContent = document.querySelector(view.domString.todoList);

      todoListContent.addEventListener("click", (event) => {
        if (event.target.className === "btn-remove") {
          state.todoList = state.todoList.splice(event.target.id - 1, 1);
        }
      });
    });
  };

  const init = () => {
    initTodoList();
  };
  return {
    init,
  };
})(View, Model);

document.addEventListener("DOMContentLoaded", () => {
  Controller.init();
});
