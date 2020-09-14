/**************Add new item to the list by clicking on the "+" button***********/
function newItem() {
    
    //Add the DOM structure for new input
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    let deleteicon = document.createElement("div");
    deleteicon.setAttribute("class", "delete");
    deleteicon.setAttribute("onclick", "deleteItem(this)");
    deleteicon.innerHTML ='<i class="far fa-trash-alt"></i>';

    let newInput = document.querySelector("#newInput").value;
    let p = document.createElement("p");
    let text = document.createTextNode(newInput);
    p.appendChild(text);
    
    div.appendChild(checkbox);
    div.appendChild(p);
    div.appendChild(deleteicon);

    //
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

