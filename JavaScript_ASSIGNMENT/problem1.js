
// 1. Write a JavaScript function that reverse a number
function reverseNumber(num) {
    let numStr = num.toString();
    return Number(numStr.split('').reverse().join(''));
}

console.log(reverseNumber(32243));
console.log(reverseNumber(1234567));