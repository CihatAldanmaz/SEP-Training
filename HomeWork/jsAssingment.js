const arr = [5,2,3]
const arrFilt = [ "art", "portrait", "monkey", "salad" , "book"]
// ======================== Map Method  ======================== 

// console.log(arr.map((item, index, array)=>{
//   console.log("actual method's result =>> ",item, index, array);
//   return item * 3;
// }))

// Array.prototype.myMap = function(cb){
//   const result = [];
//   for(let i = 0; i < this.length; i++){
//     const newValue = cb(this[i], i, this);
//     result.push(newValue);
//   }
//   return result;
// };

// console.log(arr.myMap((item, index, array) => {
//   console.log(item, index, array);
//   return item * 3;
// }));

// ======================== forEach method for Arrays ======================== 

// console.log(arr.forEach(item => console.log(item)));

// Array.prototype.myForEach = function(cb){
//   for ( let i = 0; i < this.length; i++){
//     cb(this[i], i, this);
//   };
// };

// console.log(arr.myForEach(item => console.log(item)));


// ======================== forEach method for Objects ======================== 

// const obj = { name: "Patrick", age:18};

// Object.prototype.forEach = function(cb){
//   const keys = Object.keys(this);
//   for (let i = 0; i < keys.length; i++){
//     cb(keys[i],this[keys[i]])
//   }
// } 

// console.log(obj.forEach((key, value) => {
//   console.log(key, value)
// }))



// ======================== Filter Method  ======================== 

// console.log( arrFilt.filter(item => item.length > 4))

// Array.prototype.myFilter = function(cb){
//   const result = [];
//   for (let i = 0; i < this.length; i++){
//     if ( cb(this[i]) ){
//       result.push(this[i]);
//     };
//   };
//   return result;
// };

// console.log( arrFilt.myFilter( item => item.length > 4 ) );



// ======================== Reduce Method  ======================== 

// console.log("actual method's result =>> ",arr.reduce(( acc, curr ) => {
//   return acc + curr;
// }, 0));

// Array.prototype.myReduce = function(cb){
//   let copyArr = this;
//   if (arguments[1]){
//     copyArr.unshift(arguments[1]);
//   };
//   let accumulator = this[0];
//   if(this.length < 1){
//     console.log("TypeError: Please use it with Array with more than 0 elements");
//   }
//   for( let i = 1; i < copyArr.length; i++){
//     accumulator = cb(accumulator, copyArr[i], i, this);
//     console.log(copyArr[i]);
//   };
//   return accumulator;
// };

// console.log(arr.myReduce( (acc, curr) => {
//   return acc + curr;
// }))



