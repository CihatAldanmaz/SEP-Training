function handleFetchData() {
    return fetch('https://jsonplaceholder.typicode.com/todos').then((res) => { return res.json() });
}

function handleAddTodo(text) {
    return fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            userId: '1',
            id: null,
            title: text,
            completed: false
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
}

function handleCompleteTodo(i) {
    return fetch(`https://jsonplaceholder.typicode.com/todo/${i}`, {
        method: 'PATCH',
        body: JSON.stringify({
            completed: true
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((res) => res.json());
}

function handleDeleteTodo(i) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, {
        method: 'DELETE',
    }).then(res => res.json());
}

const API = {
    handleFetchData, handleAddTodo, handleCompleteTodo, handleDeleteTodo
};

export default API;