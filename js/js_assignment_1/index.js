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
  let list_of_strings = [];
  for (i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length + 1; j++) {
      list_of_strings.push(s.slice(i, j));
    }
  }
  return list_of_strings;
}

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Example string : 'webmaster' Expected Output : 'abeemrstw'Assume punctuation and numbers symbols are not included in the passed string.

// const sortString = (str) => {
//   return str.split('').sort().join('')
// };

function sortString(str) {
  const codes = [];
  for (let i = 0; i < str.length; i++) {
    codes.push(str.charCodeAt(i));
  }
  codes.sort((a, b) => a - b);
  let newStr = "";
  for (let i = 0; i < codes.length; i++) {
    newStr += String.fromCharCode(codes[i]);
  }
  return newStr;
}

//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case. Example string : 'the quick brown fox' Expected Output : 'The Quick Brown Fox '

const firstLettersCaps = (str) => {
  const strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(" ");
};

//6. Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string. Example string : 'Web Development Tutorial' Expected Output : 'Development'

function longestWord(str) {
  let currentLength = 0;
  let currentWord;
  let longstWord;
  const strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    currentWord = strArr[i];
    if (currentWord.length > currentLength) {
      currentLength = currentWord.length;
      longestWord = currentWord;
    }
  }
  return longestWord;
}

//7. Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' asvowel here. Example string : 'The quick brown fox' Expected Output : 5

function countVowels(str) {
  str = str.toLowerCase();
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

//8. Write a JavaScript function that accepts a number as a parameter and check the number isprime or not. Note : A prime number (or a prime) is a natural number greater than 1 that has no positivedivisors other than 1 and itself.

function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

//9. Write a JavaScript function which accepts an argument and returns the type. Note : There are six possible values that typeof returns: object, boolean, function, number, string,and undefined.

const typeOfChecker = (arg) => {
  if (Array.isArray(arg)) {
    return "Array";
  }
  if (arg === null) {
    return null;
  } else {
    return typeof arg;
  }
};

//10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function matrix(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      arr[i][j] = { i: i, j: j };
    }
  }
  return arr;
}

//11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively. Sample array : [1,2,3,4,5]Expected Output : 2,4

const findSecondLowestandSecondHighest = (arr) => {
  if (!arr.length) {
    return [];
  }
  if(arr.length === 1){
      return arr
  }
  arr.sort((a, b) => a - b);
  return [arr[1], arr[arr.length - 2]];
};