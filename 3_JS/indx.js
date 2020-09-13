// primitive type data
// number , boolean, undefined, null, sysmbol
console.log(typeof '1') //string
console.log(typeof 1) //number
console.log(typeof true) //boolean
console.log(typeof undefined) //undefined
console.log(typeof null) //object
var a = 5; 
function foo(input){
    input = 6;
    console.log(input);
}
foo(a) //6 
console.log(a); //5
// if you are passing a primitive data, you are passing by value

var b = 5; 
var c = b; 
b = 6;
console.log(b,c) // 6, 5 
//coersion 
const res = true + false;
console.log(res); 
console.log('1' == 1); // ==== compare type and value, == only compare the value
// Object data
var obj = {}; //plain object 
console.log(obj);
var obj2 = Object.create({});
console.log(obj2); 
// how to create a class object
class MyObject{
    constructor(name){
        this.name = "April";

    }
}
var obj3 = MyBoject();
//fucntion is object
function foo(){
}
console.log(foo.__proto__);
//array
var arr = [1, 2, 3];

var obj = {name:'April'};
function foo(input){
    input.name = 'jane';
    console.log(input)
}
foo(obj);
console,log(obj)
// if you are passing object in JS, it is passing by reference
// javascript does not allow you change reference of it. 
//you can only setter to change property

//declare varible var | let | const
//scope         functuion| block | block
//hoist         true | no |no
var a = 3; 
function foo(){
    console.log(a) //undef --> var a; try to find varible inside scopre, otherwise outside scope
    if (true){
        var a = 5; //5
    }
    console.log(a); //5
}
console.log(abscd); 
// undef | not def
//scope of let key word is block
function foo() {
    console.log(a) // not defined error
    if (true) {
        let a = 5; //5 after coment 'console.log(a)'
    }
    console.log(a); // not defined error
}

let a = 5; //declaration
let a = 6; 
console.log(a) // error

//const | let 
//immutable 
const obj = {name: 'patrick'} // you can't assign another value to it
obj.name = 'jane';
cosole.log(obj) 

//object.defineProperty()
//javascript uses interpreter , just run from top to bottom without compling it
var a = 'hello';
function foo(){
    console.log(a);
    let a = 5;
}
foo(); 

//function can also do hoisting with var or function(), not for const or let
//class 
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }
}
const p = new Person('Patric', 18); 
console.log(p)
//prototype chain to do everything
//constructor function 
function Person(name, age){
    this.name  = name;
    this.age = age;
}
const p = new Person('Patrick', 18);
console.log(p);
// can we remove the 
// if you use constructor function, you have to use key word all the time
//use strict
