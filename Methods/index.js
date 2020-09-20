//Implementing own custom methods

//Map
Array.prototype.myMap = function(cb) {
    let output = [];
    for(let i = 0; i < this.length; i++) {
        const newVal = cb(this[i], i, this);
        output.push(newVal);
    }
    return output;
}
// console.log([1,2,3].myMap((value) => { return value * 2}));

//Filter
Array.prototype.myFilter = function(cb) {
    let output = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this) === true) {
            output.push(this[i]);
        }
    }
    return output;
}
// console.log([1,2,3].myFilter(value => value > 1));

//Reduce
Array.prototype.myReduce = function(cb, initialValue) {
    let output;
    if(initialValue) {
        output = initialValue;
    } else {
        output = 0;
    }
    for(let i = 0; i < this.length; i++) {
        output = cb(output, this[i], i, this);
    }
    return output;
}
// console.log([1,2,3].myReduce((a, b) => {return a + b}));

