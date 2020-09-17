// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response) => response.json())
// .then((data) => {
//     data.forEach((todo) => {
//         const node = document.createElement('tr');
//         node.innerHTML = `<td>${todo.userId}</td><td>${todo.id}</td><td>${todo.title}</td><td>${todo.body}</td>`;
//         document.getElementById('todos').appendChild(node);
//         console.log(todo.userId);
//     });
// });



// module pattern | facade pattern

const postAPIs = (() => {
    const baseURL = 'https://jsonplaceholder.typicode.com';
    const postsPath = 'posts';

    const getAllPosts = () => fetch([baseURL, postsPath].join('/'))
        .then((res) =>
            res.json()
        );

    return {
        getAllPosts,
    };
})();

//namespacing
// postAPIs.getAllPosts().then((data) => {
//     console.log(data);
// })

//MVC

//View
const View = (() => {
    const domString = {
        tableElement: '.table-posts',
    };
    const initTablePostsTmp = function (postsArr) {
        // '``' - this is literal string, we can put js code `${jscode....}`
        let tableTmp = `<tr>
        <th>userId</th>
        <th>id</th>
        <th>title</th>
        <th>body</th>
    </tr>`;
    postsArr.forEach(post => {
        tableTmp += `<tr>
        <td>${post.userId}</td>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
    </tr>`
    });
        return tableTmp;
    }
    return {
        domString,
        initTablePostsTmp
    };
})();

//Model
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
})(postAPIs);

//Controller
const Controller = ((view, model) => {
    const render = (htmlTemplate, element) => {
        element.innerHTML = htmlTemplate;
    };

    const initTablePosts = ()=>{
        //fetch data
        model.fetchPosts().then(data => {
            //generate data
            const tmp = view.initTablePostsTmp(data);
            //find the element
            const tableElement = document.querySelector(view.domString.tableElement);
            //render
            render(tmp, tableElement);
        })
    }

    const init = () => {
        console.log('init');
        
        initTablePosts();
    }
    return {
        init,
    };
})(View, Model);

document.addEventListener('DOMContentLoaded', function () {
    Controller.init(); //to init our app
});
