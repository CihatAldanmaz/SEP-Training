function find_unique(input){
    const char_set = new Set();
    for(let i = 0; i < input.length; i++){
        char_set.add(input[i]);
    }
    return Array.from(char_set).join('');
}  

function find_unique1(input){
    let res = "";
    for(let i = 0; i < input.length; i++){
        // indexOf() search for the first occurance of input[i] in input string
        if(res.indexOf(input[i]) === -1) res += input[i];
    }
    return res;
}

const test1 = "thequickbrownfoxjumpsoverthelazydog";
console.log(find_unique(test1));
console.log(find_unique(test1) === "thequickbrownfxjmpsvlazydg");
console.log(find_unique1(test1) === "thequickbrownfxjmpsvlazydg");

const test2 = "aaabbbbaaaaaaaabccccccccccccdcccddddee";
console.log(find_unique(test2));
console.log(find_unique(test2) === "abcde");
console.log(find_unique1(test2) === "abcde");
