
/*fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });*/

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json()).then( (data) => {
        let tbody = document.getElementById('tbody');
        
        for (let i=0; i< data.length; i++){
            let tr = "<tr>";
            tr += "<td>" + data[i].userId.toString() 
            + "</td>" + "<td>" + data[i].id.toString() 
            + "</td>" + "<td>" + data[i].title.toString() 
            + "</td>" + "<td>" + data[i].completed.toString() 
            + "</td></tr>";
            tbody.innerHTML += tr;   
        }
        return tbody
        //console.log(tbody.innerHTML);
    
    })
//document.getElementsByName('')

//userId: 1, id: 1, title: "delectus aut autem", completed:
//{userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false}