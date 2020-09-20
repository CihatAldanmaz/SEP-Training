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
      todoListTmpt += `<li class='todolist__content-item'><span>${todo.title}</span><button class='btn-remove'>X</button></li>`;
    });
    return todoListTmpt;
  };

  return {
    domString,
    renderInnerHTML,
    generateTodoListTmpt,
  };
})();

const Model = () => {};

const Controller = () => {};
