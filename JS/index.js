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

// function Person(name,age){
//     // let obj = {}
//     // obj.name = name;
//     // obj.age = age;
//     // obj.__proto__.constructor = Person;
//     // return obj
//     this.name = name;
//     this.age = age;
//     this.walk = function(){
//         console.log(this.name+ " is walking");
//     }
// }

// Person.prototype.walk = function(){
//     console.log(this.name + " is walking");
// }

// const p = new Person('Patrick',18);

// console.log(p.__proto__ === Person.prototype) // true

// const obj = {name:'hello'};
// p.walk = function(){
//     console.log(this.name + " is walking")
// }
// obj.walk = p.walk;

// p.walk(); // log Person_name is walking
// console.log(p);

// const p2 = new Person('Jane',18);
// p2.walk();




// function foo(){
//     "use strict";
//     console.log(x);
//     x = 5;
//     console.log(x);
// }

// foo();
// console.log(x);


// OOP

// class Person{
//     constructor(name,age){
//         this._name = name;
//         this._age = age;
//         this.speed = 0;
//         this.salary = 0;
//     }
//     get name(){
//         console.log('get name')
//         return this._name;
//     }
//     set name(newName){
//         console.log('set name');
//         this._name = newName;
//     }
//     walk(){
//         this.speed = 10;
//         console.log(this._name + " is walking");
//     }

//     getSalary(){
//         return this.salary;
//     }
// }

// function Person(name,age){
//     this.name = name;
//     this.age  = age;
// }
// Person.prototype.walk = function(){

// }

// class Employee extends Person{
//     constructor(name,age,company){
//         super(name,age);
//         this.company = company;
//     }

//     getSalary(baseSalary){
//         console.log('with param')
//         console.log(this.salary, baseSalary);
//         return this.salary + baseSalary;
//     }

// }

// function Employee (name,age,company){
//     Person.prototype.constructor.call(this, name, age);
//     this.company = company
// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;


// const p = new Person('patrick',18);
// console.log(p.name);
// p.name = 'New Name';

// const e  = new Employee('patrick',18,'Antra');
// console.log(e);

// console.log("=============")
// function foo(){
//     console.log("hello");
// }

// const arr  = [1,2,3];
// console.log(sum(arr));


// function sum(arr){
//     return arr.reduce((acc,cur)=>{
//         console.log(acc , cur)
//     },0)
// }
// map, filter, reduce 


// console.log(arr.forEach((value, index , array)=>{
//     console.log(value,index,array)
//     return value * 2;
// }))

// const obj = {};
// console.log(obj.name);
// console.log(arr.myForEach);
// Array.prototype.myForEach = function(cb){
//     for(let i =0;i<this.length;i++){
//        cb(this[i],i,this);
//     }
// }
// console.log(arr.forEach((value, index , array)=>{
//     console.log(value,index,array)
//     return value * 2;
// }))

// Array.prototype.myMap = function(cb){
//     const result = [];
//     for(let i =0;i<this.length;i++){
//         const newValue = cb(this[i],i,this);
//         result.push(newValue)
//     }
//     return result
// }

// const callBackFn = (item)=>{
//     console.log(item);
//     return item * 3;
// }

// console.log(arr.myMap((item)=>{
//     console.log(item);
//     return item * 3;
// }))

// console.log(arr.map((item)=>{
//     return item * 3;
// }))


// const obj = {name:'patrick'};
// var name = 'name';
// console.log(obj.name, obj[name]);

// console.log(arr);
// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// const obj = {name:'patrick',age:18};
// console.log(obj)

// Object.prototype.forEach = function(cb){
//     const keys = Object.keys(this);
//     console.log(keys);//["name","age"];
//     for (let i = 0; i < keys.length; i++){
//      cb(keys[i],this[keys[i]])
//     }
// }

// obj.forEach((key, value)=>{
//     console.log(key, value)
// });

// const arr = ['hi','hey'];
// console.log(arr);
// arr.forEach((key, value)=>{
//     console.log(key, value)
// });
// const obj2 = {0:'hi',1:'hey',length:2};
// obj2.forEach((key,value)=>{
//     console.log(key,value)
// })


/// name, patrick
/// age, 18

/// rest operator vs spread operator
// function foo(num1,num2,...hello){
//     // console.log(val1,val4);
//     // console.log(arguments,arguments[3])
//     // arguments.forEach((item)=>{
//     //     console.log(item)
//     // })
//     console.log(hello);
// }
// foo(1,2,3,4,5,6,7);
// const arr = [1,2,3];
// const arr2 = [...arr];
// const obj = {name:'patrick'};
// const obj2 = {name:'patrick'};
// console.log(obj === obj2);
// console.log(obj == obj2);
// console.log(arr,arr2);
// console.log(arr === arr2);
// console.log(arr == arr2);

// shadow copy
// const a = {name:'patrick'};
// const b = a;
// const c = {...a};
const d = {name:{value:'patrick'}};
const e = {...d}
// b.name = 'newName';
// console.log(a === b);
// console.log(a,b);
// console.log(c === a);
// c.name = 'newName';
// console.log(a,c);
e.name.value = 'newName';
console.log(e,d)
console.log([]);
// Employeee => Person : employee.getSalary
// Array => Object : array.forEach














