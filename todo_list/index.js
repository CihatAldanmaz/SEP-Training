const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let p = document.createElement("p");
  let error = false;
  if (input.value === "") {
    if (!error) {
      error = true;
      p.innerText = "Please enter a task";
      document.body.appendChild(p);
    }
  } else {
    if (error) {
      document.body.removeChild(p);
    }
    let li = document.createElement("li");
    li.innerText = input.value;
    list.appendChild(li);
  }
  input.value = "";
});

list.addEventListener("click", (event) => {
  let target = event.target;
  target.style.textDecoration = "line-through";
});
