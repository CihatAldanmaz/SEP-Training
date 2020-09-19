// State
// event bubbleing vs event capturing
// event delegation

const postsAPIs = (() => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const postsPath = 'posts';

    const getAllPosts = () =>
        fetch([baseUrl, postsPath].join('/')).then((res) => res.json());

    return {
        getAllPosts,
    };
})();

//finish api
const todoAPIs = (() => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos';

    const getAllTodos = () =>
        fetch([baseUrl, todoPath].join('/')).then((res) => res.json());

    const deleteTodo = (id) =>
        fetch([baseUrl, todoPath, id].join('/'), {
            method: 'DELETE',
        }).then((res) => res.json());

    const completeTodo = (id) => fetch([baseUrl, todoPath, id].join('/'), {
        method: 'PATCH',
        body: JSON.stringify({
            completed: true
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((res) => res.json());

    const addTodo = (todo) => fetch([baseUrl, todoPath].join('/'), {
        method: 'POST',
        body: JSON.stringify({
            userId: todo.userId,
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((res) => res.json());

    return {
        getAllTodos,
        deleteTodo,
        completeTodo,
        addTodo
    };
})();

const View = (() => {
    const domString = {
        todolist: '.todolist__content',
    };
    const renderInnerHTML = (htmlTemplate, element, arr) => {
        element.innerHTML = htmlTemplate;
        arr.forEach((todo) => {
            if (todo.completed) {
                const toToggle = document.getElementById(`list_${todo.id}`);
                toToggle.style.color = 'red';
            }
        })
    };

    const generateTodoListTmp = function (todoArr, text) {
        let todoListTmp = `<input type="text" class="todolist__input" placeholder="What are you going to do?" value = "${text}"/>`;
        todoArr.forEach((todo) => {
            todoListTmp += `<li class="todolist__content-item" id = "list_${todo.id}"><span class = "todo-title" id = "${todo.id}$">${todo.title}</span> <button id="${todo.id}" class="btn-remove">X</button></li>`;
        });

        return todoListTmp;
    };

    return {
        domString,
        generateTodoListTmp,
        renderInnerHTML
    };
})();

//connect api with model
const Model = ((api) => {
    class Todo {
        constructor(userId, id, title, completed) {
            this.userId = userId;
            this.id = id;
            this.title = title;
            this.completed = completed;
        }
    }

    const fetchTodos = api.getAllTodos;
    const deleteTodo = api.deleteTodo;
    const completeTodo = api.completeTodo;
    const addTodo = api.addTodo;

    return {
        fetchTodos,
        deleteTodo,
        completeTodo,
        addTodo,
        Todo
    };
})(todoAPIs);

const AppController = ((view, model) => {
    class State {
        constructor() {
            this._todolist = [];
            this._text = '';
        }
        get todolist() {
            return this._todolist;
        }
        get text() {
            return this._text;
        }

        set text(itemText) {
            this._text = itemText;
        }

        set todolist(newList) {
            this._todolist = newList;

            // rerender
            // generate template
            const tmp = view.generateTodoListTmp(this._todolist, this._text);
            // find the element
            const todoListElement = document.querySelector(view.domString.todolist);
            // render
            view.renderInnerHTML(tmp, todoListElement, this._todolist);

            // event bubbling
        }

    }


    const state = new State();

    const initTodoList = () => {
        // fetch Data
        model.fetchTodos().then((data) => {
            // update the state
            state.todolist = data;
            // addEventListener
            // const todolistContent = document.querySelector(view.domString.todolist);
            // todolistContent.addEventListener('click', (event) => {
            //     if (event.target.className === 'btn-remove') {
            //         //state.todolist[0].title = 'hello';
            //         // state.todolist = state.todolist.map((todo) => {
            //         //   return {
            //         //     ...todo,
            //         //     title: 'hello',
            //         //   };
            //         // });
            //         // state.todolist = state.todolist.filter(
            //         //   (todo) => +todo.id !== +event.target.id
            //         // );
            //     }
            // });
            const todolistContent = document.querySelector(view.domString.todolist);
            todolistContent.addEventListener('click', (event) => {
                if (event.target.className === 'btn-remove') {
                    state.todolist = state.todolist.filter(
                        (todo) => +todo.id !== +event.target.id
                    );
                }
            });

            todolistContent.addEventListener('click', (event) => {
                if (event.target.className === 'todo-title') {
                    const nextTodoList = [...state.todolist];
                    nextTodoList.forEach((todo) => {
                        if (todo.id === parseInt(event.target.id)) {
                            todo.completed = !todo.completed;
                        }
                    })
                    state.todolist = nextTodoList;
                }
            })

            const inputValue = document.getElementsByTagName('input')[0];
            inputValue.addEventListener('keyup', (event) => {
                state.text = event.target.value;
                console.log(state.text);
            })

            inputValue.addEventListener('keypress', (event) => {
                console.log(event);
                if (event.key === 'Enter') {
                    const todo = new model.Todo('1', '1', state.text, false);
                    const nextState = [...state.todolist];
                    nextState.push(todo);
                    state.todolist = nextState;
                    state.text = '';
                    console.log(state.todolist);
                }
            }, false)
        });
    };

    const init = () => {
        console.log('init');
        initTodoList();
    };
    return {
        init,
    };
})(View, Model);

document.addEventListener('DOMContentLoaded', function () {
    AppController.init();
});