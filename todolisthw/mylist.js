window.onload = function() {
    var btn = document.querySelector(".btn");
    var ul = document.querySelector(".mylist ul:first-child");
    var search = document.querySelector(".search");
    var spans;
    var lis;
    init();

    function init() {
        update();
        btn.onclick = addList;
        for (let i = 0; i < spans.length; i++) {
            lis[i].index = i;
            spans[i].onclick = removeList;
            lis[i].onclick = checked;
        }
    }

    function addList() {
        if (search.value !== "") {
            var li = '<li>' + search.value + '<span>X</span></li>';
            ul.insertAdjacentHTML("beforeend", li);
            init();
        } else {
            this.parentNode.querySelector("input").placeholder = "please enter something";
        }
    }

    function update() {
        spans = document.querySelectorAll("span");
        lis = document.querySelectorAll("li");
    }

    function removeList(e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        console.log(index);
        lis[index].remove();
        init();
    }

    function checked() {
        if (this.className === "checked") {
            this.className = "unchecked";
        } else {
            this.className = "checked";
        }
    }

};