//----myMap----
Array.prototype.myMap = function (cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    let newVal = cb(this[i], i, this);
    output.push(newVal);
  }
  return output;
};

const arr = [1, 2, 3];

// console.log(
//   arr.myMap((val, index, array) => {
//     return val * 2;
//   })
// );

//----myFilter----
Array.prototype.myFilter = function (cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this) === true) {
      output.push(this[i]);
    }
  }
  return output;
};

// console.log(
//   arr.myFilter((val, index, array) => {
//     return val < 3;
//   })
// );

//----myFind----
Array.prototype.myFind = function (cb) {
  let foundItem;
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      foundItem = this[i];
      break;
    }
  }
  return foundItem;
};

// console.log(
//   arr.myFind((val, index, array) => {
//     return val === 2;
//   })
// );
