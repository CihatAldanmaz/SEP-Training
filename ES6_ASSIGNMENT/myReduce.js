// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myReduce = function (f, result) {
    var i = 0;
    if (arguments.length < 2) {
      i = 1;
      result = this[0];
    }
    for(; i < this.length; i++) {
      result = f(result, this[i], i, this);
    }
    return result;
  };

var sum = s.myReduce((acc, cur) => {
    return acc + cur;
}, 0);

console.log(sum);