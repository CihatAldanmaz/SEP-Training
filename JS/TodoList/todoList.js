// State
// event bubbleing vs event capturing
// event delegation

const postsAPIs = (() => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const postsPath = 'posts';

  const getAllPosts = () =>
    fetch([baseUrl, postsPath].join('/')).then((res) => res.json());

  return {
    getAllPosts,
  };
})();
const todoAPIs = (() => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const todoPath = 'todos';

  const getAllTodos = () =>
    fetch([baseUrl, todoPath].join('/')).then((res) => res.json());

  const deleteTodo = (id) =>
    fetch([baseUrl, todoPath, id].join('/'), {
      method: 'DELETE',
    }).then((res) => res.json());

  return {
    getAllTodos,
    deleteTodo,
  };
})();

const View = (() => {
  const domString = {
    todolist: '.todolist__content',
  };
  const renderInnerHTML = (htmlTemplate, element) => {
    element.innerHTML = htmlTemplate;
  };

  const generateTodoListTmp = function (todoArr) {
    let todoListTmp = '';
    todoArr.forEach((todo) => {
      todoListTmp += `<li class="todolist__content-item"><span>${todo.title}</span> <button id="${todo.id}" class="btn-remove">X</button></li>`;
    });

    return todoListTmp;
  };
  return {
    domString,
    generateTodoListTmp,
    renderInnerHTML,
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
  const deleteTodo = api.deleteTodo;

  return {
    fetchTodos,
    deleteTodo,
  };
})(todoAPIs);

const AppController = ((view, model) => {
  class State {
    constructor() {
      this._todolist = [];
    }
    get todolist() {
      return this._todolist;
    }

    set todolist(newList) {
      this._todolist = newList;

      // rerender
      // generate template
      const tmp = view.generateTodoListTmp(this._todolist);
      // find the element
      const todoListElement = document.querySelector(view.domString.todolist);
      // render
      view.renderInnerHTML(tmp, todoListElement);

      // event bubbling
      // const btnRemoves = document.querySelectorAll('.btn-remove');
      // btnRemoves.forEach((node) => {
      //   node.addEventListener('click', () => {
      //     // remove the todo based on id
      //     console.log(node.id);
      //     model.deleteTodo(node.id).then(() => {
      //       console.log('remove');
      //       state.todolist = state.todolist.filter(
      //         (todo) => +todo.id !== +node.id
      //       );
      //       console.log(state.todolist);
      //     });
      //   });
      // });
    }
  }

  const state = new State();

  const initTodoList = () => {
    // fetch Data
    model.fetchTodos().then((data) => {
      // update the state
      state.todolist = data;
      // addEventListener
      const todolistContent = document.querySelector(view.domString.todolist);
      todolistContent.addEventListener('click', (event) => {
        if (event.target.className === 'btn-remove') {
          //state.todolist[0].title = 'hello';
          // state.todolist = state.todolist.map((todo) => {
          //   return {
          //     ...todo,
          //     title: 'hello',
          //   };
          // });
          // state.todolist = state.todolist.filter(
          //   (todo) => +todo.id !== +event.target.id
          // );
        }
      });
    });
  };

  const init = () => {
    console.log('init');
    initTodoList();
  };
  return {
    init,
  };
})(View, Model);

document.addEventListener('DOMContentLoaded', function () {
  AppController.init();
});
