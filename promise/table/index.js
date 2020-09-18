
const table = document.getElementById('table');

function renderData(arr) {
    arr.forEach((value, index) => {
        const row = table.insertRow(index);
        const cellUserId = row.insertCell(0);
        const cellTitle = row.insertCell(1);
        cellUserId.innerHTML = value.userId;
        cellTitle.innerHTML = value.title;
    })
}

const promise1 = fetch(
    'https://jsonplaceholder.typicode.com/posts'
).then((res) => res.json()).then((data) => {
    renderData(data);
});

// Promise.all(promise1).then((values) => {
//     for (let i = 0; i < values.length; i++) {
//         console.log(values[i]);
//         data.push({ ...values[i] });
//     }
//     console.log(data);
//     renderData(data);
// });

