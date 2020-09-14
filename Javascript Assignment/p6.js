function find_longest_word(input){
    const str_arr = input.split(' ');
    let max = 0, index = 0;
    for(let i = 0; i < str_arr.length; i++){
        if(str_arr[i].length > max){
            max = str_arr[i].length;
            index = i;
        }
    }
    return str_arr[index];
}


const test1 = 'Web Development Tutorial';
console.log(find_longest_word(test1));

const test2 = 'Write a JavaScript function that accepts a number';
console.log(find_longest_word(test2));