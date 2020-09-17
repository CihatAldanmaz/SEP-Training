// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) => {
//     console.log('=== fetch Get ====');
//     console.log(json);
//   });

function myfetch_get(url) {
    return new Promise((res, rej) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                const response = {
                    json: function () {
                        return JSON.parse(xhttp.responseText);
                    },
                };
                res(response);
            }
        };
        xhttp.open('GET', url, true);
        xhttp.send();
    });
}

myfetch_get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => {
        console.log('=== fetch Post ====');
        console.log(json);
    });

function myfetch_post(url, object) {
    return new Promise((res, rej) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                const res_arr = [...xhttp.responseText];

                console.log(res_arr.filter((obj)=> obj["userId"]=== object['userId']));
                const response = {
                    json: function () {
                        return JSON.parse(xhttp.responseText);
                    },
                };
                res(response);
                
            }
        };
        xhttp.open('GET', url, true);
        xhttp.send();
    });
}
const object = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}

myfetch_post('https://jsonplaceholder.typicode.com/posts', object)
    .then((response) => response.json())
    .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// fetch('https://jsonplaceholder.typicode.com/todos/2')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// fetch('https://jsonplaceholder.typicode.com/todos/3')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// function logUsers(user1, user2, user3) {
//   console.log(user1, user2, user3);
// }

// Promise catch, Promise.all, fetch

