/*
    28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
*/

function callFunction (callback) {
    callback();
}

function foo() {
    console.log('Hello World');
}

callFunction(foo);