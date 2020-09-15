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

console.log(
  arr.myMap((val, index, array) => {
    return val * 2;
  })
);


//---