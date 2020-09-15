// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFind = function(callback) {
    for(let item of this) {
        if(callback(item)) {
            return item
        }
    }
}

var new_s = s.myFind(function(item){
    return item > 97;
});

console.log(new_s);
  