// functions

// add new list item into the list
const addTodo = (event) => {
  event.preventDefault();
  let list = document.querySelector('.list');
  let li = document.createElement('li');
  let input = document.getElementById('input');

  li.innerHTML = `${input.value}<i class="delete fas fa-times"></i>`;
  list.appendChild(li);
  input.value = '';

  li.lastElementChild.onclick = function () {
    let div = this.parentElement;
    div.style.display = 'none';
  };
};

// checked when clicking on a list item
const checked = (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
};

// Event Listeners

document.getElementById('add').addEventListener('click', addTodo);
document.querySelector('ul').addEventListener('click', checked);

let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = 'none';
  };
}
