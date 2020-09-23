// myMap
Array.prototype.myMap = function(cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const newValue = cb(this[i], i, this);
    result.push(newValue);
    // console.log(result);
  }
  return result;
}

const callBackFn = (item)=>{
    console.log(item);
    return item * 3;
}

// myFilter
Array.prototype.myFilter = function(cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
    
  }
  return result;
}

const callBackFn2 = (item)=>{
  console.log(item);
  return item.length > 3;
}

// myReduce
Array.prototype.myReduce = function(cb, init) {
  var result = init;
  for (let i = 0; i < this.length; i++) {
    const newValue = cb(this[i], result, i, this);
    result = newValue;
  }
  return result;
}

const callBackFn3 = (acc, cur)=>{
  // console.log(item);
  return acc + cur;
}

const array = [1, 2, 3, 4];
console.log(array.myReduce(callBackFn3, 0));