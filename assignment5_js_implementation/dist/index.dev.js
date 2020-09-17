"use strict";

var arr = [1, 2, 3]; //Array.myMap

Array.prototype.myMap = function (cb) {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    result[i] = cb(this[i]);
  }

  return result;
};

var arr2 = arr.myMap(function (value) {
  return value * 2;
});
console.log(arr2); //Array.myReduce

Array.prototype.myReduce = function (cb, init) {
  var obj = Object(this);
  var len = obj.length;
  var value = init;
  var index = 0;

  while (index < len) {
    value = cb(value, obj[index]);
    index++;
  }

  return value;
};

var reduceResult = arr.myReduce(function (acc, cur) {
  return acc + cur;
}, 10);
console.log(reduceResult); //Array.myFilter

Array.prototype.myFilter = function (cb) {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};

var filterArr = arr.myFilter(function (value) {
  return value >= 2;
});
console.log(filterArr); //Object forEach

var obj = {
  name: "Duan",
  age: 18
};

Object.prototype.forEach = function (cb) {
  var keys = Object.keys(this);

  for (var i = 0; i < keys.length; i++) {
    cb(keys[i], this[keys[i]]);
  }
};

obj.forEach(function (key, value) {
  console.log(key, value);
});