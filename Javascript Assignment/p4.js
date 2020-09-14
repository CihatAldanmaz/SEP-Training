function alpha_order(input){
    return input.split('').sort().join('');
}

const test1 = "webmaster";
console.log(alpha_order(test1));

const test2 = "javascript";
console.log(alpha_order(test2));