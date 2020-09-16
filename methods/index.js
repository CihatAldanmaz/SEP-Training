Array.prototype.myMap = function (callback) {
    let ret = [];

    for (let i = 0; i < this.length; i++) {
        const num = callback(this[i], i, this);
        ret.push(num);
    }
    return ret;
}

// Array.prototype.myMap1 = function(callback, context){
//     let ret = [];
//     for(let i = 0; i < this.length; i++){
//         ret.push(callback.call(context, this[i], i, this))
//     }
// }
console.log([1, 2, 3].myMap((value) => { return value * 2 }));

Array.prototype.myFilter = function (callback, context) {
    let ret = [];

    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
            ret.push(this[i]);
        }
    }
    return ret;
}
console.log([1, 2, 3].myFilter((value) => { return value > 1 }));

Array.prototype.myReduce = function (callback, initialValue) {
    let ret = initialValue;

    for (let i = 0; i < this.length; i++) {
        ret = callback.call(undefined, ret, this[i], i, this);
    }
    return ret;
}

console.log([1, 2, 3].myReduce((a, b) => { return a + b }, 0));