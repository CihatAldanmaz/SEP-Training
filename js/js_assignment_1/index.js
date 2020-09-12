//1. Write a JavaScript function that reverse a number.
//Example
// Input: x = 32243
//Output: 34223

// const numbReverse = (num) => {
//   let newStr = "";
//   const strNum = num.toString();
//   for (let i = strNum.length - 1; i >= 0; i--) {
//     newStr += strNum[i];
//   }
//   return Number(newStr);
// };

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,madam or nurses run

const isPalindrome = (str) => {
  return str.toLowerCase() === str.split("").reverse().join("");
};

console.log(isPalindrome("racecar"));
