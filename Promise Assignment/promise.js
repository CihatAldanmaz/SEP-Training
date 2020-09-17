fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => {
    console.log('=== fetch Get ====');
    console.log(json);
  });
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

function myfetch(url) {
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

myfetch('https://jsonplaceholder.typicode.com/todos/1')
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

