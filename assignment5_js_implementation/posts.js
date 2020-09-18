fetch('https://jsonplaceholder.typicode.com/todos')
.then((res) => res.json())
.then((data =>{
    data.forEach(element => {
        let newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${element.userId}</td><td>${element.id}</td><td>${element.title}</td><td>${element.completed}</td>`
        let table = document.querySelector("table");
        table.appendChild(newRow);
    });
}))