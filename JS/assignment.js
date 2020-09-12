//1. Write a JavaScript function that reverse a number. 
function reverseNum(num) {
    let output = "";
    for(let i = num.length - 1; i >= 0; i--) {
        output += num[i].toString();
    }
    return output;
}
console.log(reverseNum(3265));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,madam or nurses run.

