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