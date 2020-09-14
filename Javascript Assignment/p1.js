function reverse(input){
    const max = Math.pow(2, 31);
    let res = 0;
    while(input !== 0){
        res = res*10 + input%10;
        //shifts number by right 0 bits, when using bit shifting, if will implicitly convert number to integer
        if(res > max || res < -max) return 0;
        input = (input/ 10) >> 0;
        //or input = (input/10) << 0;
    }
    return res;
}

function reverse1(input){
    const max = Math.pow(2, 31);
    const sign = Math.sign(input);
    const num = Math.abs(input).toString().split('').reverse().join('');
    return (sign*num > max || sign*num < -max)? 0: sign*num;
}



// test cases
const test1 = 32243;
console.log(reverse(test1));
console.log(reverse1(test1));

const test2 = -32243;
console.log(reverse(test2));
console.log(reverse1(test2));

const test3 = Math.pow(2, 31);
console.log(reverse(test3));
console.log(reverse1(test3));


