var nodeList = document.getElementsByTagName('li');
var i;
for (i = 0; i < nodeList.length; i++) {
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt)
    nodeList[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
var j;
for (j = 0; j < close.length; j++) {
    close[j].onclick = function () {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}

var todoList = document.querySelector('ul');
todoList.addEventListener('click', function (ele) {
    if (ele.target.tagName === 'LI') {
        ele.target.classList.toggle('checked');
    }
}, false);

function addNew() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') alert('You input is empty.')
    else document.getElementById('list-ul').appendChild(li);

    document.getElementById('myInput').value = '';

    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}