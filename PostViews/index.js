let userTable = document.querySelector('.user-table')

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


let userList;
myfetchGet('https://jsonplaceholder.typicode.com/todos')
  .then((response) => 
    response.json().forEach((user) => {
    const userRow = document.createElement('tr');
    userRow.classList.add('user'); 
  
    const userIdCol = document.createElement('td');
    userIdCol.innerText = user.userId;
    userRow.appendChild(userIdCol);
    const idCol = document.createElement('td');
    idCol.innerText = user.id;
    userRow.appendChild(idCol);
    const titleCol = document.createElement('td');
    titleCol.innerText = user.title;
    userRow.appendChild(titleCol);
  
    userTable.appendChild(userRow);
  }))
  .then((data) => userList = data);

// userList.forEach((user) => {
//   const userRow = document.createElement('tr');
//   userRow.classList.add('user');

//   const userIdCol = document.createElement('td');
//   userIdCol.innerText = user.userId;
//   userRow.appendChild(userIdCol);
//   const idCol = document.createElement('td');
//   idCol.innerText = user.id;
//   userRow.appendChild(idCol);
//   const titleCol = document.createElement('td');
//   titleCol.innerText = user.title;
//   userRow.appendChild(titleCol);

//   userTable.appendChild(userRow);
// })


