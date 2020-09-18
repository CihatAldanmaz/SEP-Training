// module pattern | facade pattern
// namespacing
// // console.log(postsAPIs.getAllPosts()); //
// postsAPIs.getAllPosts().then((data) => {
//   console.log(data);
// });

/// MVC

const postsAPIs = (() => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const postsPath = 'posts';

  const getAllPosts = () =>
    fetch([baseUrl, postsPath].join('/')).then((res) => res.json());

  return {
    getAllPosts,
  };
})();

const View = (() => {
  const domString = {
    tableElement: '.table-posts',
  };

  const initTablePostsTmp = function (postsArr) {
    let tableTmp = `<tr>
    <th>userId</th>
    <th>id</th>
    <th>title</th>
    <th>body</th>
  </tr>`;
    postsArr.forEach((post) => {
      tableTmp += `<tr>
      <td>${post.userId}</td>
      <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.body}</td>
    </tr>`;
    });

    return tableTmp;
  };
  return {
    domString,
    initTablePostsTmp,
  };
})();

const Model = ((api) => {
  class Post {
    constructor(userId, id, title, body) {
      this.userId = userId;
      this.id = id;
      this.title = title;
      this.body = body;
    }
  }

  const fetchPosts = api.getAllPosts;

  return {
    fetchPosts,
  };
})(postsAPIs);

const Controller = ((view, model) => {
  const render = (htmlTemplate, element) => {
    element.innerHTML = htmlTemplate;
  };

  const initTablePosts = () => {
    // fetch Data
    model.fetchPosts().then((data) => {
      // generate template
      const tmp = view.initTablePostsTmp(data);
      // find the element
      const tableElement = document.querySelector(view.domString.tableElement);
      // render
      render(tmp, tableElement);
    });
  };

  const init = () => {
    console.log('init');
    initTablePosts();
  };
  return {
    init,
  };
})(View, Model);

document.addEventListener('DOMContentLoaded', function () {
  Controller.init();
});
