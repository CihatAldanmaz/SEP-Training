class MyJQuery {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    html(template) {
        this.element.innerHTML = template;
    }
}

const $$ = function (selector) {
    return new MyJQuery(selector);
}

$$.ajax = function (options) {

}

$$('button.continue').html('Next Step...')