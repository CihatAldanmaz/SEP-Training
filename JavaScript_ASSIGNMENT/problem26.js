/*
    26. Write a JavaScript function to find longest substring in a given a string without repeating
    characters.
*/

function nonRepeat(s) {
    let charCount = {};
    let window_start = 0;
    let currentLength = 0;
    let substring = '';
    for(let window_end = 0; window_end < s.length; window_end++) {
        currentLength++;
        if(charCount[s[window_end]]) {
            charCount[s[window_end]] += 1;
        } else {
            charCount[s[window_end]] = 1;
        }
        
        while(charCount[s[window_end]] > 1) {
            charCount[s[window_start]]--;
            window_start++;
            currentLength--;
        }
        
        if(currentLength > substring.length) {
            substring = s.slice(window_start, window_end + 1);
        }
    }
    return substring;
}

console.log(nonRepeat("abcabcbb"));
console.log(nonRepeat("bbbbb"));
console.log(nonRepeat("pwwkew"));
console.log(nonRepeat(""));