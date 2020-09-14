"use strict";

/**************Add new item to the list by clicking on the "+" button***********/
function newItem() {
  //Add the DOM structure for new input
  var div = document.createElement("div");
  div.setAttribute("class", "item");
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  var deleteicon = document.createElement("div");
  deleteicon.setAttribute("class", "delete");
  deleteicon.setAttribute("onclick", "deleteItem(this)");
  deleteicon.innerHTML = '<i class="far fa-trash-alt"></i>';
  var newInput = document.querySelector("#newInput").value;
  var p = document.createElement("p");
  var text = document.createTextNode(newInput);
  p.appendChild(text);
  div.appendChild(checkbox);
  div.appendChild(p);
  div.appendChild(deleteicon); //

  if (newInput === "") {
    alert("Please enter a new item to add to the list.");
  } else {
    document.querySelector(".items").appendChild(div);
    document.querySelector("#newInput").value = "";
  }
}
/**************Delete finished item from the list***********/


function deleteItem(element) {
  item = element.parentNode;
  item.parentNode.removeChild(item);
}