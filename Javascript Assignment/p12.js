function perfect_number(input){
    if(input <= 0 ) return false;
    let sum = 0;
    for(let i = 0; i*i < input; i++){
        if(input % i === 0){
            sum += i;
            //if sqrt(input) is integer, only count once
            if(i * i !== input){
                sum += input/i;
            }
        }
    }
    return sum/2 === input;
}

const test1 = 6;
console.log(perfect_number(test1));
const test2 = 28;
console.log(perfect_number(test2));
const test3 = 496;
console.log(perfect_number(test3));
const test4 = 8128;
console.log(perfect_number(test4));
const test5 = 10000;
console.log(perfect_number(test5));