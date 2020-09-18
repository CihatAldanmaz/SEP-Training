function newItem() {
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    let newInput = document.querySelector("#newInput").value;
    div.innerHTML = `<input type="checkbox">
    <p>${newInput}</p>
    <div class="delete"><i class="far fa-trash-alt"></i></div>
    `;

    if (newInput === "") {
        alert("Please enter a new item to add to the list.");
    } else {
        document.querySelector(".items").appendChild(div);
        document.querySelector("#newInput").value = "";
        
        div.querySelector(".delete").addEventListener("click", function(){
            deleteItem(this);
        });
    }
}

let add = document.querySelector("button");
add.addEventListener("click", function(){
    newItem();
});


/**************Delete finished item from the list***********/
function deleteItem(element) {
    item = element.parentNode; 
    item.parentNode.removeChild(item);
}

let toDeleteItems = document.querySelectorAll(".delete");
toDeleteItems.forEach((item) =>{
    item.addEventListener("click", function(){
        deleteItem(this);
    })
})