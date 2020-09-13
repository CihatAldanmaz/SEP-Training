//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//EVENT LISTENER
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkDelete);

//FUNCTIONS
function addTodo(event) {
    event.preventDefault();
    //TODO DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //CREATE LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    //ADD TO LIST
    todoList.appendChild(todoDiv);
    todoInput.value = '';
}

//DELETE CURRENT TODO OR CHECK OFF TODO
function checkDelete(event) {
    const item = event.target;
    //CHECK OFF
    if(item.classList[0] === 'complete-btn') {
        const currentTodo = item.parentElement;
        currentTodo.classList.toggle('completed');
    }
    //DELETE
    if(item.classList[0] === 'delete-btn') {
        const currentTodo = item.parentElement;
        currentTodo.remove();
    }


}