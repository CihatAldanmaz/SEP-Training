"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// module pattern | facade pattern
// namespacing
// // console.log(postsAPIs.getAllPosts()); //
// postsAPIs.getAllPosts().then((data) => {
//   console.log(data);
// });
/// MVC
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

var View = function () {
  var domString = {
    tableElement: '.table-posts'
  };

  var initTablePostsTmp = function initTablePostsTmp(postsArr) {
    var tableTmp = "<tr>\n    <th>userId</th>\n    <th>id</th>\n    <th>title</th>\n    <th>body</th>\n  </tr>";
    postsArr.forEach(function (post) {
      tableTmp += "<tr>\n      <td>".concat(post.userId, "</td>\n      <td>").concat(post.id, "</td>\n      <td>").concat(post.title, "</td>\n      <td>").concat(post.body, "</td>\n    </tr>");
    });
    return tableTmp;
  };

  return {
    domString: domString,
    initTablePostsTmp: initTablePostsTmp
  };
}();

var Model = function (api) {
  var Post = function Post(userId, id, title, body) {
    _classCallCheck(this, Post);

    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  };

  var fetchPosts = api.getAllPosts;
  return {
    fetchPosts: fetchPosts
  };
}(postsAPIs);

var Controller = function (view, model) {
  var render = function render(htmlTemplate, element) {
    element.innerHTML = htmlTemplate;
  };

  var initTablePosts = function initTablePosts() {
    // fetch Data
    model.fetchPosts().then(function (data) {
      // generate template
      var tmp = view.initTablePostsTmp(data); // find the element

      var tableElement = document.querySelector(view.domString.tableElement); // render

      render(tmp, tableElement);
    });
  };

  var init = function init() {
    console.log('init');
    initTablePosts();
  };

  return {
    init: init
  };
}(View, Model);

document.addEventListener('DOMContentLoaded', function () {
  Controller.init();
});