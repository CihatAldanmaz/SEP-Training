function char_counts(input){
    const char_map = {};
    // \s matches whitespace (spaces, tabs and new lines). \S is negated \s. \S matches anything but a whitespace
    input.replace(/\S/g, (c) => {char_map[c] = (isNaN(char_map[c])? 1 : char_map[c]+1)});
    return char_map;
}

function char_counts1(input){
    const char_map = {};
    const regex = /[0-9a-z]/i;
    for(let i = 0; i < input.length; i++){
        if(regex.test(input[i])){
            if(isNaN(char_map[input[i]])) char_map[input[i]] = 1;
            else char_map[input[i]] += 1;
        }
    }
    return char_map;
}

function char_counts2(input){
    const char_map = new Map();
    const regex = /[0-9a-z]/i;
    for(let i = 0; i < input.length; i++){
        if(regex.test(input[i])){
            if(char_map.has(input[i])) char_map.set(input[i], char_map.get(input[i])+1);
            else char_map.set(input[i], 1);
        }
    }
    return char_map;
}

const test1 = "aabbccddee";
console.log(char_counts(test1));
console.log(char_counts1(test1));
console.log(char_counts2(test1));