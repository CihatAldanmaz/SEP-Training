const url = 'https://jsonplaceholder.typicode.com/todos/';
const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

const addInput = document.getElementById("addInput");
let inputValue = "";
addInput.addEventListener("change" , event => inputValue = event.target.value);

addBtn.addEventListener("click", () => {
  fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method:"POST",
    body: JSON.stringify({  userId: 201, id: 201, title: inputValue , completed: false })
  }).then( () => console.log('added'))
})

fetch(url)
.then(data => data.json() )
.then(data =>{
  for (let i = 0; i < data.length; i++){
    const li = document.createElement("li");
    const textNode = document.createTextNode(data[i].title);
    const removerBtn = document.createElement("button");
    const btnText = document.createTextNode("X");
    
    removerBtn.setAttribute("class", "removerBtn");
    removerBtn.setAttribute("id", data[i].id);
    removerBtn.appendChild(btnText);
    
    removerBtn.addEventListener("click", (event) => {
      console.log(event.target.id)
      fetch(url + event.target.id, { method: 'DELETE'})
      .then(res => res.json());
    });
    
    li.appendChild(textNode);
    li.appendChild(removerBtn);
    list.appendChild(li);
  };
});

// var removerBtn = document.getElementsByClassName("removerBtn");
// console.log(removerBtn.length);
// removerBtn[1].addEventListener("click", (event) => {
//   console.log(event.target.id)
//   // fetch(url + event.target.id, { method: 'DELETE'})
//   // .then(res => res.json());
// });
