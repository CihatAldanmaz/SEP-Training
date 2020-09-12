/*
    3. Write a JavaScript function that generates all combinations of a string. 
    Example string : 'dog' Expected Output : d,do,dog,o,og,g
*/

function combinations(s) {
    let combinations = [];
    for(let i = 0; i < s.length; i++) {
        let tmp = '';
        for(let j = i; j < s.length; j++) {
            tmp += s[j];
            combinations.push(tmp);
        }
    }
    return combinations
}

console.log(combinations('dog'));