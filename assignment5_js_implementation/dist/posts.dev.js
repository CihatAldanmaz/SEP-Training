"use strict";

fetch('https://jsonplaceholder.typicode.com/todos').then(function (res) {
  return res.json();
}).then(function (data) {
  data.forEach(function (element) {
    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td>".concat(element.userId, "</td><td>").concat(element.id, "</td><td>").concat(element.title, "</td><td>").concat(element.completed, "</td>");
    var table = document.querySelector("table");
    table.appendChild(newRow);
  });
});