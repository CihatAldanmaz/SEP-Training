const url = 'https://jsonplaceholder.typicode.com/todos/';

fetch(url)
.then( res => res.json())
.then( data => {
  data.forEach(user => {
    $('#list').append(`<li>${user.title}</li>`)
    $('#list').append(`<button id=${user.id} class='removerBtn'>X</button>`)
  });
});