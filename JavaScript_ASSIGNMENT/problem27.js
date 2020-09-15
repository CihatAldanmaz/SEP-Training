/*
    27. Write a JavaScript function that returns the longest palindrome in a given string. 
    Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
    symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
    given string that is also a palindrome. For example, the longest palindromic substring of
    "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
    example, in the string "abracadabra", there is no palindromic substring with length greater than
    three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
    In some applications it may be necessary to return all maximal palindromic substrings (that is, all
    substrings that are themselves palindromes and cannot be extended to larger palindromic
    substrings) rather than returning only one substring or returning the maximum length of a
    palindromic substring.
*/

var expandAroundCenter = function(s, left, right) {
    let l = left;
    let r = right;

    while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
        l--;
        r++;
    }
    return r - l - 1;
}


var longestPalindrome = function(s) {
let start = 0;
let end = 0;
for(let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i+1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
        start = i - Math.floor((len - 1) / 2);
        end = i + Math.floor(len / 2);
    }
}
return s.slice(start, end + 1);
};