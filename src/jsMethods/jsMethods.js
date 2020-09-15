// Reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator;
  if (initialValue !== undefined) {
    accumulator = initialValue;
  }
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.myReduce((a, b) => a + b, 10));

// Filter
Array.prototype.myFilter = function (callback, thisArg) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

let arr2 = [1, 2, 3, 4, 5];

console.log(arr2.myFilter((x) => x > 1));
