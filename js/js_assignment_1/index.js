//1. Write a JavaScript function that reverse a number.
//Example
// Input: x = 32243
//Output: 34223

const numbReverse = (num) => {
  let newStr = "";
  const strNum = num.toString();
  for (let i = strNum.length - 1; i >= 0; i--) {
    newStr += strNum[i];
  }
  return Number(newStr);
};

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,madam or nurses run

const isPalindrome = (str) => {
  return str.toLowerCase() === str.split("").reverse().join("");
};

//3. Write a JavaScript function that generates all combinations of a string. Example string : 'dog' Expected Output : d,do,dog,o,og,g

function substrings(s) {
  list_of_strings = [];
  for (i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length + 1; j++) {
      list_of_strings.push(s.slice(i, j));
    }
  }
  return list_of_strings;
}

console.log(substrings("dog"));
