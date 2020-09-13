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
  if (arr.length === 1) {
    return arr;
  }
  arr.sort((a, b) => a - b);
  return [arr[1], arr[arr.length - 2]];
};

//12. Write a JavaScript function which says whether a number is perfect. According to Wikipedia : In number theory, a perfect number is a positive integer that is equal tothe sum of its proper positive divisors, that is, the sum of its positive divisors excluding thenumber itself (also known as its aliquot sum). Equivalently, a perfect number is a number that ishalf the sum of all of its positive divisors (including itself).Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1+ 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by theperfect numbers 496 and 8128.

const isPerfectNum = (number) => {
  let temp = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }
  if (temp === number) {
    return true;
  } else {
    return false;
  }
};

//13. Write a JavaScript function to compute the factors of a positive integer.

const factors = (num) => {
  const output = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      output.push(i);
    }
  }
  return output;
};

//14. Write a JavaScript function to convert an amount to coins. Sample function : amountTocoins(46, [25, 10, 5, 2, 1])Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. Output : 25, 10, 10, 1

const coinConverter = (amount, coins) => {};

//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is thebases. Accept b and n from the user and display the result.

const power = (b, n) => {
  return b ** n;
};

//16. Write a JavaScript function to extract unique characters from a string. Example string : "thequickbrownfoxjumpsoverthelazydog"Expected Output : "thequickbrownfxjmpsvlazydg"

const uniqueCharExtractor = (str) => {
  let outputStr = "";
  const charMap = {};
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (charMap[currentChar]) {
      charMap[currentChar]++;
    } else {
      charMap[currentChar] = 1;
    }
  }
  let keys = Object.keys(charMap);
  for (let key of keys) {
    outputStr += key;
  }
  return outputStr;
};

//17. Write a JavaScript function to  get the number of occurrences of each letter in specifiedstring.

function charCount(str) {
  const charMap = {};
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (charMap[currentChar]) {
      charMap[currentChar]++;
    } else {
      charMap[currentChar] = 1;
    }
  }
  return charMap;
}

//18. Write a function for searching JavaScript arrays with a binary search.

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  if (arr[middle] === val) {
    return middle;
  }
  return -1;
};

//19. Write a JavaScript function that returns array elements larger than a number.
function findAllLarger(arr, num) {
  return arr.filter((el) => {
    return el > num;
  });
}

//20. Write a JavaScript function that generates a string id (specified length) of random characters.

const randomStrGenerator = (num) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomStr = "";

  for (let i = 1; i <= num; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomStr;
};

//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)combinations in an array.

//22. Write a JavaScript function that accepts two arguments, a string and a letter and the functionwill count the number of occurrences of the specified letter within the string.

const countLetterOccurance = (str, letter) => {
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
};

//23. Write a JavaScript function to find the first not repeated character. Sample arguments : 'abacddbec' expected output: 'e'
const firstNonRepeatingChar = (str) => {
  let charMap = {};
  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]]) {
      charMap[str[i]]++;
    } else {
      charMap[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]] === 1) {
      return str[i];
    }
  }
};

//24. Write a JavaScript function to apply Bubble Sort algorithm.

function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwap = true;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwap = false;
        swap(arr, j, j + 1);
      }
    }
    if (noSwap) break;
  }
  return arr;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

