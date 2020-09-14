function find_second_lowest_and_second_largest(input){
    // remove duplicates
    const unq_set = new Set();
    for(let i = 0; i < input.length; i++){
        unq_set.add(input[i]);
    }

    const sorted_input = Array.from(unq_set).sort((a, b)=> a-b);
    const arr = new Array(2);
    arr[0] = sorted_input[1];
    arr[1] = sorted_input[sorted_input.length-2];
    return arr;
} 

const test1 = [1, 2, 3, 4, 5];
console.log(find_second_lowest_and_second_largest(test1));

//why the sorting does not work/
const test2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(find_second_lowest_and_second_largest(test2));

const test3 = [3, 1, 4, 2, 7, 9];
console.log(find_second_lowest_and_second_largest(test3));

const test4 = [1, 1, 4, 9, 2, 9];
console.log(find_second_lowest_and_second_largest(test4));
