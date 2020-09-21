"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var View = function () {
  var initListTmp = function initListTmp(currentTodos) {
    var listTmp = "";
    currentTodos.forEach(function (todo) {
      listTmp += "<div class=\"item ".concat(todo.id, "\">\n            <input type=\"checkbox\">\n            <p>").concat(todo.text, "</p>\n            <div class=\"delete\"><i class=\"far fa-trash-alt\"></i></div>\n            </div>");
    });
  };
}();

var Model = function () {
  var todos = [{
    id: 1,
    text: "Buy dinner",
    complete: false
  }, {
    id: 2,
    text: "Buy lunch",
    complete: false
  }];

  var addTodo = function addTodo(todoText) {
    var todo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false
    };
    todos.push(todo);
  };

  var deleteTodo = function deleteTodo(id) {
    todos = (_readOnlyError("todos"), todos.filter(function (todo) {
      return todo.id !== id;
    }));
  };

  var toggleTodo = function toggleTodo(id) {
    todos = (_readOnlyError("todos"), todos.map(function (todo) {
      return todo.id === id ? {
        id: todo.id,
        text: todo.text,
        complete: !todo.complete
      } : todo;
    }));
  };

  return {
    todos: todos,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    toggleTodo: toggleTodo
  };
}();

var Controller = function (view, model) {}(View, Model);

document.addEventListener('DOMContentLoaded', function () {
  Controller.init();
});