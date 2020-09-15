// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  for(let item of this) {
    if(callback(item)) {
      newArray.push(item);
    }
  }
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

console.log(new_s);