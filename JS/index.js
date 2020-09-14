// Primative type data
// number
// boolean
// string
// undefined
// null
// symbol

// console.log(typeof '1'); // string
// console.log(typeof 1); // number
// console.log(typeof true); // boolean
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

// var a = 5;

// function foo(input){
//     input =6;
//     console.log(input) // 6
// }
// foo(a);
// console.log(a); // 5
// var b = 5;
// var c = b;
// b = 6;
// console.log(b,c); // 6 , 5;

// ======== coersion =========
// const res = true + false;
// console.log(res);
// console.log('1' == 1);
// console.log('1' === 1);

// Object Data
// var obj = {name:'patrick'}; // plain Object
// console.log(obj)
// var obj2 = Object.create({});
// console.log(obj2);

// class MyObject{
//     constructor(name){
//         this.name = name;
//     }
// }
// var obj3 = new MyObject('patrick'); // class Object
// console.log(obj3)

// function foo(){
// }
// console.log(foo.__proto__);

// var arr = [1,2,3];
// console.log(arr)

// var obj = {name:'patrick'};
// function foo(input){
//     input.name = 'jane';
//     console.log(input === obj) // {name:"jane"}
// }

// function foo(input){
//     console.log(input === obj) // true
//     input = { name: 'jane'}
//     console.log(input) // {name:"jane"}
//     console.log(input === obj) // false
//     console.log(input)
// }
// foo(obj);
// console.log(obj);// {name:"jane"}

//            var   |  let    |  const 
// scope: function     block    block
// hoist: true          no       no

// console.log(a);
// let a = 5;
//  a = 6;
// const obj = {name:'patrick'};
// obj.name = 'jane';
// obj = {};
// console.log(obj);
// var a = 'hello'

// function foo(){
//     console.log(a);
//     let a = 5;
// }
// foo();


// function foo(){
    
//     console.log(a);// undefined
//     if(true){
//         var  a = 5;
//     }
//     console.log(a);// 5;
// }

// function foo(){
//     // console.log(a); // not defined Error
//     if(true){
//         let a = 5;
//         console.log(a);
//     }
//     console.log(a); // not defined Error
// }
// foo()
// undefined vs not defined
// console.log(adsfsdafsd);

// class

// class Person {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     walk(){
//         console.log(this.name + " is walking")
//     }
// }

function Person(name,age){
    // let obj = {}
    // obj.name = name;
    // obj.age = age;
    // obj.__proto__.constructor = Person;
    // return obj
    this.name = name;
    this.age = age;
}
Person.prototype.walk = function(){
    console.log(this.name + " is walking");
}

const p = new Person('Patrick',18);
// console.log(p.__proto__ === Person.prototype) // true

// const obj = {name:'hello'};
// p.walk = function(){
//     console.log(this.name + " is walking")
// }
// obj.walk = p.walk;

p.walk(); // log Person_name is walking
console.log(p);

const p2 = new Person('Jane',18);
p2.walk();




// function foo(){
//     "use strict";
//     console.log(x);
//     x = 5;
//     console.log(x);
// }

// foo();
// console.log(x);





