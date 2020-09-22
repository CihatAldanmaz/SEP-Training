"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// State
// event bubbleing vs event capturing
// event delegation
var postsAPIs = function () {
  var baseUrl = 'https://jsonplaceholder.typicode.com';
  var postsPath = 'posts';

  var getAllPosts = function getAllPosts() {
    return fetch([baseUrl, postsPath].join('/')).then(function (res) {
      return res.json();
    });
  };

  return {
    getAllPosts: getAllPosts
  };
}();

var todoAPIs = function () {
  var baseUrl = 'https://jsonplaceholder.typicode.com';
  var todoPath = 'todos';

  var getAllTodos = function getAllTodos() {
    return fetch([baseUrl, todoPath].join('/')).then(function (res) {
      return res.json();
    });
  };

  var deleteTodo = function deleteTodo(id) {
    return fetch([baseUrl, todoPath, id].join('/'), {
      method: 'DELETE'
    }).then(function (res) {
      return res.json();
    });
  };

  return {
    getAllTodos: getAllTodos,
    deleteTodo: deleteTodo
  };
}();

var View = function () {
  var domString = {
    todolist: '.todolist__content'
  };

  var renderInnerHTML = function renderInnerHTML(htmlTemplate, element) {
    element.innerHTML = htmlTemplate;
  };

  var generateTodoListTmp = function generateTodoListTmp(todoArr) {
    var todoListTmp = '';
    todoArr.forEach(function (todo) {
      todoListTmp += "<li class=\"todolist__content-item\"><span>".concat(todo.title, "</span> <button id=\"").concat(todo.id, "\" class=\"btn-remove\">X</button></li>");
    });
    return todoListTmp;
  };

  return {
    domString: domString,
    generateTodoListTmp: generateTodoListTmp,
    renderInnerHTML: renderInnerHTML
  };
}();

var Model = function (api) {
  var Todo = function Todo(userId, id, title, completed) {
    _classCallCheck(this, Todo);

    this.userId = userId;
    this.id = id;
    this.title = title;
    this.completed = completed;
  };

  var fetchTodos = api.getAllTodos;
  var deleteTodo = api.deleteTodo;
  return {
    fetchTodos: fetchTodos,
    deleteTodo: deleteTodo
  };
}(todoAPIs);

var AppController = function (view, model) {
  var State =
  /*#__PURE__*/
  function () {
    function State() {
      _classCallCheck(this, State);

      this._todolist = [];
    }

    _createClass(State, [{
      key: "todolist",
      get: function get() {
        return this._todolist;
      },
      set: function set(newList) {
        this._todolist = newList; // rerender
        // generate template

        var tmp = view.generateTodoListTmp(this._todolist); // find the element

        var todoListElement = document.querySelector(view.domString.todolist); // render

        view.renderInnerHTML(tmp, todoListElement); // event bubbling
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
    }]);

    return State;
  }();

  var state = new State();

  var initTodoList = function initTodoList() {
    // fetch Data
    model.fetchTodos().then(function (data) {
      // update the state
      state.todolist = data; // addEventListener

      var todolistContent = document.querySelector(view.domString.todolist);
      todolistContent.addEventListener('click', function (event) {
        if (event.target.className === 'btn-remove') {//state.todolist[0].title = 'hello';
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

  var init = function init() {
    console.log('init');
    initTodoList();
  };

  return {
    init: init
  };
}(View, Model);

document.addEventListener('DOMContentLoaded', function () {
  AppController.init();
});