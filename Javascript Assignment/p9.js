function typename(input){
    return typeof(input);
}

const test1 = 2;
console.log(typename(test1));
const test2 = {};
console.log(typename(test2));
const test3 = function(){};
console.log(typename(test3));
const test4 = true;
console.log(typename(test4));
const test5 = "hello";
console.log(typename(test5));
let test6;
console.log(typename(test6));