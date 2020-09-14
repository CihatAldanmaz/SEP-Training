/*
    17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
*/

function charCount(s) {
    let count = {};

    for(let i = 0; i < s.length; i++) {
        if(count[s[i]]) {
            count[s[i]] += 1;
        } else {
            count[s[i]] = 1;
        }
    }
    return count;
}
