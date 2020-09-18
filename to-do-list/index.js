const taskAdder = document.querySelector(".task-adder");
let taskCount = 1;

taskAdder.lastElementChild.addEventListener("click", () => {
    document.querySelector("tbody").innerHTML += `
    <tr>
        <td>${taskCount++}</td>
        <td>${taskAdder.firstElementChild.value}</td>
    </tr>
    `;
});

const Model = ((input) => {
    class Task {
      constructor(id, body) {
        this.id = id;
        this.body = body;
      }
    }

    return new Task(taskCount++, input.value);
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
        const tmp = view.initTableTasksTmp(model);

        render(tableElement, tmp);
    };

    const init = () => {
        initTableTasks();
    }

    return {
        init
    };
})(View, Model);