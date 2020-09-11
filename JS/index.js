// ======coersion======
// const res = true + false;
// console.log(res); // 1
// console.log('1' == 1);//true
// console.log('1' === 1);//false

// Object data
// var obj = {}; // plain object
// console.log(obj);

// var obj2 = Object.create({});

// function
// function foo() {

// }

// var arr = [1, 2, 3];

// object reference
// var obj = {name: 'patrick'};
// function foo(input) {
//     console.log(input === obj);
//     input.name = 'jane';
//     input = {name: 'zz'};
//     console.log(input); //{name: 'jane'}
//     console.log(input === obj);//true
// }
// foo(obj);
// console.log(obj);//{name: 'jane'}


//          var     |     let      |    const
//scope: function         block          block
//hoisting YES             NO           NO
// var a = 3;         
// function foo() {
//     console.log(a);// undefined
//     if (true) {
//         var a = 5;
//     }
//     console.log(a); // 5
// }
// foo();
// console.log(a);// will throw an error
// //undefined vs not defined
// // console.log(fsdfsdfds);// will throw an error

// function foo() {
//     // console.log(a);// throw an error
//     if (true) {
//         let a = 5; // let will not do the hoisting
//     }
//     // console.log(a);// throw an error
// }
// foo();

// const a = 3;
// a = 4; // error
// console.log(a);

// //======Watch on this situation!!! Below========
// var a = 'hello';
// function foo() {
//     console.log(a);//error, actually, let has hoisting, but we can't use it before initailze
//     let a = 5;
// }
// foo();
// //======Watch on this situation!!! Above========

// ==================
// console.log(x); //error
// x = 3.5;
// console.log(x);// 3.5, in real projecgt, we don't allow this, so "use strict"
//======================

//=====================
// console.log(foo());//undefined
// function foo() {

// }
// console.log(foo());//undefined
// var boo = () => {
//     console.log("s");// s
// }
// console.log(boo());// undefined
// boo();
//===============

//=============
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const p = new Person('Patrick', 18);
// console.log(p);

// function Person2(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const p2 = new Person2('AAA', 12);
// console.log(p2);
// ===================

// ========================
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const p = new Person('Patrick', 18);
// p.walk = function() {
//     console.log(this.name + ' is walking');
// }
// p.walk();

// const p2 = new Person('Jane', 18);
// p2.walk();// error, p2.walk is not a function
//========================


//==============================
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.walk = function() {
    console.log(this.name + ' is walking');
}
const p = new Person('Patrick', 18);
console.log(p.__proto__ === Person.prototype); // true
//================================

