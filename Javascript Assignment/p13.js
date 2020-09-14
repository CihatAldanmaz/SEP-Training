function find_factors(input){
    if(input <= 0) return new Array(0);
    const res = new Array();
    for(let i = 0; i*i < input; i++){
        if(input % i === 0){
            res.push(i);
            if(i * i !== input){
                res.push(input/i);
            }
        }
    }
    // why sort() not working? because by default, the sort() function sorts values as strings.
    // However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
    // so we need to use compare function
    
    // return res.sort((a, b) =>{return a - b});
    return res.sort((a, b) => a - b);
}

const test1 = 6;
console.log(find_factors(test1));
const test2 = 28;
console.log(find_factors(test2));
const test3 = 496;
console.log(find_factors(test3));
const test4 = 8128;
console.log(find_factors(test4));
const test5 = 10000;
console.log(find_factors(test5));