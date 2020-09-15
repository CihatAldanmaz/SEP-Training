const list = document.getElementsByClassName('delete');
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function (i) {
        console.log(this);
        const item = this.parentNode;
        const ul = item.parentNode;
        ul.removeChild(item);
    })
}

const check = document.getElementsByClassName('check');
console.log(check);
for (let i = 0; i < check.length; i++) {
    check[i].addEventListener('click', function () {
        const item = this.parentNode;
        console.log(item);
        item.style.textDecoration = 'line-through';
    })
}
const addTodo = (event) => {
    event.preventDefault();
    const todoText = document.getElementById('todo-input');

    const todoItem = document.createElement('li');
    const todoCheckbox = document.createElement('input');
    const todoLabel = document.createElement('label');
    const todoButton = document.createElement('button');

    todoCheckbox.type = 'checkbox';
    todoCheckbox.className = 'check';
    todoItem.innnerText = todoText.value;
    todoItem.className = 'todo-item';
    todoLabel.innerText = todoText.value;
    todoButton.className = 'delete';
    todoButton.innerHTML = 'x';

    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(todoLabel);
    todoItem.appendChild(todoButton);

    todoText.value = '';

    document.getElementById('todo-list').appendChild(todoItem);
    //     console.log(container);
    //     container.getElementById('todo-list').appendChild(todoItem);

    const list = document.getElementsByClassName('delete');
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function (i) {
            console.log(this);
            const item = this.parentNode;
            const ul = item.parentNode;
            ul.removeChild(item);
        })
    }

    const check = document.getElementsByClassName('check');
    console.log(check);
    for (let i = 0; i < check.length; i++) {
        check[i].addEventListener('click', function () {
            const item = this.parentNode;
            console.log(item);
            item.style.textDecoration = 'line-through';
        })
    }
}


document.getElementById('submit').addEventListener('click', addTodo);
// const list = document.getElementsByClassName('delete');
// for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener('click', function (i) {
//         console.log(this);
//         const item = this.parentNode;
//         const ul = item.parentNode;
//         ul.removeChild(item);
//     })
// }

// const check = document.getElementsByClassName('check');
// console.log(check);
// for (let i = 0; i < check.length; i++) {
//     check[i].addEventListener('click', function () {
//         const item = this.parentNode;
//         console.log(item);
//         item.style.textDecoration = 'line-through';
//     })
// }


