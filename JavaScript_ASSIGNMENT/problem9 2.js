/*
    Write a JavaScript function which accepts an argument and returns the type. 
    Note : There are six possible values that typeof returns: object, boolean, function, number, string,and undefined
*/

function getType(input) {
    return typeof input;
}
var a;

console.log(getType('9'));
console.log(getType(null));
console.log(getType(1234));
console.log(getType(true));
console.log(getType(a));
console.log(getType(getType));
