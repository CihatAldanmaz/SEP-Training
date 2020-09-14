function larger_element(input, value){
    return input.filter(e => e > value);
}

console.log(larger_element([11, 45, 4, 31, 64, 10], 10));