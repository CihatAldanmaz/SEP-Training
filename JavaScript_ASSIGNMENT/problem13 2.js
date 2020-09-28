/*
    13. Write a JavaScript function to compute the factors of a positive integer.
*/

function getFactors(num) {
    let factors = new Set();
    for(let i = 1; i < num; i++) {
        if (num % i === 0) {
            factors.add(i);
            factors.add(num / i);
        }
    }
    return factors;
}

console.log(getFactors(24));