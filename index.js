// const arr = [1,2,3]
// // console.log(arr.map((item, index, array)=>{
// //   console.log(item, index, array);
// // }))

// Array.prototype.myMap = function(cb){
//   const result = [];
//   for(let i = 0; i < this.length; i++){
//     const newValue = cb(this[i], i, this);
//     result.push(newValue);
//   }
//   return result;
// }

// console.log(arr.myMap((item, index, array)=>{
//   // console.log(item, index, array);
//   return item * 3;
// }))

// Array.prototype.myForEach = funciton(cb){
//   console.log(cb)
//   // for (let i = 0; i < this.length; i++){
//   //   console.log(cb(this[i], i, this));
//   // }
// };

// console.log( arr.myForEach((item)=>{console.log(item)})
// )

const obj = { name: "Patrick", age:18};

Object.prototype.forEach = function(cb){
  const keys = Object.keys(this);
  for (let i = 0; i < keys.length; i++){
    cb(keys[i],this[keys[i]])
  }
} 

console.log(obj.forEach((key, value) => {
  console.log(key, value)
}))