function identity_matrix(n){    
    // create a new array
    // 1. const arr = Array(1, 2, 3);
    //apply is same as call, which allows to take array as argument to call function
    // 2. const arr = Array.apply(null, [1, 2, 3]); 
    
    // very dangerous way, see explanation: https://stackoverflow.com/questions/18163234/declare-an-empty-two-dimensional-array-in-javascript
    //const matrix = new Array(n).fill(new Array(n).fill(0));
    
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for(let i= 0; i < n; i++){
        matrix[i][i] = 1;
    }
    return matrix;
}
// map() functions will skip holes(undefined variables), 
// which means map() does not execute the function for array elements without values.
// so we can not write such code:
// const arr = new Array(n).map(() => ...);
// above will not work because we didn't initialize the array, all the elements inside the array are undefined
// instead we need to write this:
// const arr = new Array(n).fill(0).map(() => ...);
// However if we use Function.prototype.apply(), it will not skip holes(undefined variables), so below works:
// const arr = Array.apply(null, new Array(n)).map(() => ...);
// see detail explanations: https://2ality.com/2013/11/initializing-arrays.html

function identity_matrix1(n){
    // try to create array like this won't work: const a = new Array(n);
    // but this will work: const a = new Array(n).fill(0);
    const a = Array.apply(null, new Array(n));
    return a.map(function(x, i) { return a.map(function(y, k) { return i === k ? 1 : 0; }) })
}

console.log(identity_matrix1(3));
console.log(identity_matrix1(4));
console.log(identity_matrix1(6));
