Array.prototype.myReduce = function(callback, initialValue) {
    if (this.length === 0) {
        return;
    }
    let acc = initialValue || this[0];
    let startIndex = initialValue ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }
    return acc;
}

Array.prototype.myFilter = function(callback, this) {
    let result = [];
    for (var i = 0; i < this.length; i++) {
        result.push(callback(this[i]));
    }
}