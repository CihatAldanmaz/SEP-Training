// jQuery
// what is the difference between library and framework?
// library: React, JQuery, axios
// framework: Angular, Vue, Express,      framework includes a lot of things such as configration, Angular CLI

// CDN:  Content Delivery Network
// benefits:  

class MyJQuery {
  constructor(selector) {
    // find and store the element based on the selector
    // this.element = document.querySelector(selector);
    this.element = document.querySelectorAll(selector);
    console.log(this.element);

  }
  html(template) {
    // set InnerHTML for the element stored in the instance
    // this.element.innerHTML = template;
    this.element.forEach((element) => {
      element.innerHTML = template;
    })
  }
}