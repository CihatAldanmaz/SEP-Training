let taskAdder = document.querySelector(".task-adder");
let taskCount = 1;

taskAdder.lastElementChild.addEventListener("click", () => {
    document.querySelector("tbody").innerHTML += `
    <tr>
        <td>${taskCount++}</td>
        <td>${taskAdder.firstElementChild.value}</td>
    </tr>
    `;
});