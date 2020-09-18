"use strict";

function newItem() {
  var div = document.createElement("div");
  div.setAttribute("class", "item");
  var newInput = document.querySelector("#newInput").value;
  div.innerHTML = "<input type=\"checkbox\">\n    <p>".concat(newInput, "</p>\n    <div class=\"delete\"><i class=\"far fa-trash-alt\"></i></div>\n    ");

  if (newInput === "") {
    alert("Please enter a new item to add to the list.");
  } else {
    document.querySelector(".items").appendChild(div);
    document.querySelector("#newInput").value = "";
    div.querySelector(".delete").addEventListener("click", function () {
      deleteItem(this);
    });
  }
}

var add = document.querySelector("button");
add.addEventListener("click", function () {
  newItem();
});
/**************Delete finished item from the list***********/

function deleteItem(element) {
  item = element.parentNode;
  item.parentNode.removeChild(item);
}

var toDeleteItems = document.querySelectorAll(".delete");
toDeleteItems.forEach(function (item) {
  item.addEventListener("click", function () {
    deleteItem(this);
  });
});