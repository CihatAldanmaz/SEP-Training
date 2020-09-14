function find_longest_word(input){
    return input.reduce((longest_name, curr_name) => (curr_name.length > longest_name.length)? curr_name: longest_name);
}

console.log(find_longest_word(["Australia", "Germany", "United States of America"]));