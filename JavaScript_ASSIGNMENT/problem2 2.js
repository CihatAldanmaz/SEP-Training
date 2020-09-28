/* 2. Write a JavaScript function that checks whether a passed string 
s palindrome or not? A palindrome is word, phrase, or sequence that reads 
the same backward as forward, e.g.,madam or nurses run. */

function isPalindrome(s) {
    const pattern = /^[a-z0-9]+$/i;
    let i = 0;let j = s.length - 1;
    
    while(i < j) {
        while(i <= j && !s[i].match(pattern)) {
            i++;
        }
        
        while(i <= j && !s[j].match(pattern)) {
            j--;
        }
        
        if(i < j) {
            if(s[i].toLowerCase() === s[j].toLowerCase()) {
                i++;
                j--;
            } else {
                return false;
            }
        }
    }
    
    return true;
}
