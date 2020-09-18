const taskAdder = document.querySelector(".task-adder");

const Model = ((input) => {
    let taskCount = 1;

    class Task {
        constructor(id, body) {
            this.id = id;
            this.body = body;
        }
    }

    const getTask = () => new Task(taskCount++, input.value);

    return {
        getTask
    };
})(taskAdder.firstElementChild);

const View = (() => {
    const domString = {
        tableElement: "tbody",
    };

    const initTableTasksTmp = (task) => {
        const tableTmp = `
        <tr>
            <td>${task.id}</td>
            <td>${task.body}</td>
        </tr>
        `;

        return tableTmp;
    };

    return {
        domString,
        initTableTasksTmp
    };
})();

const Controller = ((view, model) => {
    const render = (element, htmlTemplate) => {
        element.innerHTML += htmlTemplate;
    }

    const initTableTasks = () => {
        const tableElement = document.querySelector(view.domString.tableElement);
        const tmp = view.initTableTasksTmp(model.getTask());

        render(tableElement, tmp);
    };

    const init = () => {
        initTableTasks();
    }

    return {
        init
    };
})(View, Model);

taskAdder.lastElementChild.addEventListener("click", () => {
    Controller.init();
});