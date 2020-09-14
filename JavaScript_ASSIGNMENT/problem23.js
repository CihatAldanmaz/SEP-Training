/*
    23. Write a JavaScript function to find the first not repeated character. 
    Sample arguments : 'abacddbec' 
    Expected output : 'e'
*/

function findFirstNonRepeat(s) {
    let charCount = {};
    for(let c of s) {
        if(charCount[c]) {
            charCount[c]++;
        } else {
            charCount[c] = 1;
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(charCount[s[i]] === 1) {
            return s[i];
        }
    }
    return -1;
}

console.log(findFirstNonRepeat('abacddbec'));