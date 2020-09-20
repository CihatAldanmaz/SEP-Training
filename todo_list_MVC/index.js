//define the apis
const todoAPIs = (() => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const todoPath = "todos";

  const getAllTodos = () => {
    return fetch([baseUrl, todoPath].join("/")).then((res) => {
      return res.json();
    });
  };

  const deleteTodo = (id) => {
    fetch([baseUrl, todoPath, id].join("/"), {
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

// const getAllPosts = () =>
// fetch([baseUrl, postsPath].join('/')).then((res) => res.json());

// return {
// getAllPosts,
// };
// })();
// const todoAPIs = (() => {
// const baseUrl = 'https://jsonplaceholder.typicode.com';
// const todoPath = 'todos';

// const getAllTodos = () =>
// fetch([baseUrl, todoPath].join('/')).then((res) => res.json());

// const deleteTodo = (id) =>
// fetch([baseUrl, todoPath, id].join('/'), {
//   method: 'DELETE',
// }).then((res) => res.json());

// return {
// getAllTodos,
// deleteTodo,
// };

console.log(todoAPIs.getAllTodos);
