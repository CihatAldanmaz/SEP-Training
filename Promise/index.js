//Fetch Methods

//Get Request
function myfetchGet(url) {
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

myfetchGet('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => console.log(json));

//Post Request
// function myfetchPost(url, object) {
//     return new Promise((res, rej) => {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//           if (this.readyState == 4 && this.status == 200) {
//             // Typical action to be performed when the document is ready:
//             const response = {
//               json: function () {
//                 return JSON.parse(xhttp.responseText);
//               },
//             };
//             res(response);
//           }
//         };
//         xhttp.open('POST', url, true);
//         xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//         xhttp.send(object);
//       });
// }

// const object = {
//     title: 'hello',
//     body: 'this is the body',
//     userId: 1
// }

// myfetchPost('https://jsonplaceholder.typicode.com/posts', object)
//     .then((response) => response.json())
//     .then((json) => console.log(json));