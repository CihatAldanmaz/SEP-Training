function myFetch(url, options = { method: 'GET' }) {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        let response = this.responseText;
        resolve({
          json: function () {
            return JSON.parse(response);
          },
        });
      }
    };
    xhttp.open(options.method, url, true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhttp.send(options.body);
  });
}

// test get

myFetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

// test post

myFetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json));
