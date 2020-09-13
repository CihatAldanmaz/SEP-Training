"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**************** Question 1****************/
// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 
function reverseNumber(num) {
  return parseInt(num.toString().split("").reverse().join(""), 10);
}

; //Test

console.log(reverseNumber(12345));
/**************** Question 2****************/
// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
} //Test


console.log(isPalindrome("madam"));
console.log(isPalindrome("abc"));
/**************** Question 3****************/
// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

function findSubstring(str) {
  var output = [];

  for (var i = 0; i < str.length; i++) {
    for (var j = i; j < str.length; j++) {
      output.push(str.substring(i, j + 1));
    }
  }

  return output;
}

console.log(findSubstring("dog"));
/**************** Question 4****************/
// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alphabeticalString(str) {
  return str.split("").sort().join("");
} //Test


console.log(alphabeticalString("webmaster"));
/**************** Question 5****************/
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of 
// each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

function capitalizeString(str) {
  return str.toLowerCase().split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }).join(" ");
} //Test


console.log(capitalizeString('the quick brown fox'));
/**************** Question 6****************/
// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

function longestWord(str) {
  var arr = str.split(" ");
  var maxLen = 0;
  var output = "";

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLen) {
      maxLen = arr[i].length;
      output = arr[i];
    }
  }

  return output;
} //Test


console.log(longestWord("Web Development Tutorial"));
/**************** Question 7****************/
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

function vowelCount(str) {
  var arr = ["a", "e", "i", "o", "u"];
  var vowelSet = new Set(arr);
  var count = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;

      if (vowelSet.has(_char)) {
        count++;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return count;
} //Test


console.log(vowelCount('The quick brown fox'));
/**************** Question 8****************/
// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  }

  for (var x = 2; x < Math.sqrt(num); x++) {
    if (num % x === 0) {
      return false;
    }
  }

  return true;
} //Test


console.log(isPrime(23));
/**************** Question 9****************/
// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function findType(input) {
  return _typeof(input);
}

console.log(findType({
  name: "2"
}));
/**************** Question 10****************/
// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

function identityMatrix(n) {
  var arr = [];

  for (var i = 0; i < n; i++) {
    arr[i] = [];

    for (var j = 0; j < n; j++) {
      arr[i][j] = 0;

      if (i === j) {
        arr[i][j] = 1;
      }
    }
  }

  return arr;
} //Test


console.log(identityMatrix(5));
/**************** Question 11****************/
// 11. Write a JavaScript function which will take an array of numbers stored and find the 
// second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 

function findSecondNumbers(arr) {
  var uniqueSet = new Set(arr);

  var uniqueArr = _toConsumableArray(uniqueSet);

  uniqueArr.sort(function (a, b) {
    return a - b;
  });
  return uniqueArr[1].toString() + "," + uniqueArr[uniqueArr.length - 2].toString();
} //Test


console.log(findSecondNumbers([1, 2, 3, 4, 5]));
/**************** Question 12****************/
// 12. Write a JavaScript function which says whether a number is perfect. 

function isPerfect(num) {
  if (num < 1) return false;
  var curSum = 0;

  for (var i = 1; i < num; i++) {
    if (num % i === 0) {
      curSum += i;
    }
  }

  return curSum === num;
} //Test


console.log(isPerfect(0));
/**************** Question 13****************/
// 13. Write a JavaScript function to compute the factors of a positive integer. 

function findFactors(num) {
  var arr = [];
  if (num < 1) return [];

  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(findFactors(56));
/**************** Question 14****************/
// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

function amountToCoins(amount, coins) {
  if (amount === 0) return [];
  var dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  coins.sort(function (a, b) {
    return b - a;
  });
  pi = Array(coins.length);

  for (var j = 0; j <= coins.length; j++) {
    pi[j] = Array(amount + 1).fill(0);
  }

  for (var i = 1; i <= amount; i++) {
    for (var _j = 0; _j < coins.length; _j++) {
      if (i >= coins[_j] && dp[i - coins[_j]] !== Infinity) {
        dp[i] = Math.min(dp[i], dp[i - coins[_j]] + 1);

        if (dp[i] === dp[i - coins[_j]] + 1) {
          pi[_j][i] = 1;
        }
      }
    }
  }

  if (dp[amount] === Infinity) return null;
  var output = [];
  var remain = amount;

  while (remain > 0) {
    for (var _j2 = 0; _j2 < coins.length; _j2++) {
      if (pi[_j2][remain] === 1) {
        output.push(coins[_j2]);
        remain -= coins[_j2];
      }
    }
  }

  return output;
} //Test


console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
/**************** Question 15****************/
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
// Accept b and n from the user and display the result. 

function computeExponential() {
  var n = parseInt(prompt("Please enter a exponent for calculation: "), 10);
  var b = parseInt(prompt("Please enter a base for calculation: "), 10);
  alert("The result of ".concat(b, " to the power of ").concat(n, " is ").concat(Math.pow(b, n), "."));
} //Test


computeExponential();
/**************** Question 16****************/
// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

function uniqueString(str) {
  var mySet = new Set();
  var output = "";
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = str[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _char2 = _step2.value;

      if (!mySet.has(_char2)) {
        output += _char2;
        mySet.add(_char2);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return output;
} //Test


console.log(uniqueString("thequickbrownfoxjumpsoverthelazydog"));
/**************** Question 17****************/
// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 

function getFrequency(str) {
  var freq = {};
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = str[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _char3 = _step3.value;

      if (freq[_char3]) {
        freq[_char3]++;
      } else {
        freq[_char3] = 1;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return freq;
} //Test


console.log(getFrequency("abccc"));
/**************** Question 18****************/
// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binarySearch(arr, target) {
  var start = 0;
  var end = arr.length - 1;
  var mid = 0;

  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  return null;
} //Test


console.log(binarySearch([3, 4, 6, 7, 9, 14, 27], 4));
/**************** Question 19****************/
// 19. Write a JavaScript function that returns array elements larger than a number. 

function findLargerNumber(arr, target) {
  var output = [];
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = arr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var num = _step4.value;

      if (num > target) {
        output.push(num);
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return output;
} //Test


console.log(findLargerNumber([3, 4, 6, 7, 9, 14, 27], 6));
/**************** Question 20****************/
// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function randomCharGenerator(id) {
  var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var output = "";

  for (var i = 0; i < id; i++) {
    output += charList[Math.floor(Math.random() * charList.length)];
  }

  return output;
} //Test


console.log(randomCharGenerator(8));
/**************** Question 21****************/
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

function fixLengthSubsets(arr, target) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var output = [];
  var path = [];
  helper(arr, target, 0, path, output);
  return output;
}

function helper(arr, target, index, path, output) {
  if (path.length === target) {
    output.push(Array.from(path));
    return;
  }

  for (var i = index; i < arr.length; i++) {
    if (i !== index && arr[i] === arr[i - 1]) {
      continue;
    }

    path.push(arr[i]);
    helper(arr, target, i + 1, path, output);
    path.pop();
  }
} //Test


console.log(fixLengthSubsets([1, 2, 2, 3], 2));
/**************** Question 22****************/
// 22. Write a JavaScript function that accepts two arguments, 
// a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 

function countChar(str, letter) {
  var count = 0;
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = str[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var _char4 = _step5.value;

      if (letter === _char4) {
        count++;
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return count;
}

console.log(countChar('microsoft.com', 'o'));
/**************** Question 23****************/
// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 

function firstNonRepeat(str) {
  var unique = new Set();
  var seen = new Set();
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = str[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var _char5 = _step6.value;

      if (seen.has(_char5)) {
        if (unique.has(_char5)) {
          unique["delete"](_char5);
        }
      } else {
        seen.add(_char5);
        unique.add(_char5);
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
        _iterator6["return"]();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  return Array.from(unique.keys())[0];
} //Test


console.log(firstNonRepeat('abacddbec'));
/**************** Question 24****************/
// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(arr) {
  var isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        isSorted = false;
      }
    }
  }

  return arr;
} //Test


console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
/**************** Question 25****************/
// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

function longestCountryName(names) {
  var output = "";
  var maxLen = 0;
  names.forEach(function (name) {
    if (maxLen < name.length) {
      maxLen = name.length;
      output = name;
    }
  });
  return output;
} //Test


console.log(longestCountryName(["Australia", "Germany", "United States of America"]));
/**************** Question 26****************/
// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

function longestSubstring(str) {
  var unique = new Set();
  var left = 0;
  var maxLen = 0;
  var maxLeft = 0;

  for (var right = 0; right < str.length; right++) {
    while (unique.has(str[right])) {
      unique["delete"](str[left]);
      left++;
    }

    if (maxLen < right - left + 1) {
      maxLen = right - left + 1;
      maxLeft = left;
    }

    unique.add(str[right]);
  }

  return str.substring(left, left + maxLen);
} //Test


console.log(longestSubstring("aabcbdf"));
/**************** Question 27****************/
// 27. Write a JavaScript function that returns the longest palindrome in a given string. 

function longestPalindrome(str) {
  var n = str.length;
  var output = str[0];
  var dp = Array.from({
    length: n
  }, function () {
    return Array.from({
      length: n
    }, function () {
      return false;
    });
  });

  for (var i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  for (var _i = 0; _i < n - 1; _i++) {
    if (str[_i] === str[_i + 1]) {
      dp[_i][_i + 1] = true;
      output = str.substring(_i, _i + 2);
    }
  }

  var j = 0;

  for (var delta = 2; delta < n; delta++) {
    for (var _i2 = 0; _i2 < n - delta; _i2++) {
      j = _i2 + delta;

      if (str[_i2] === str[j] && dp[_i2 + 1][j - 1]) {
        dp[_i2][j] = true;
        output = str.substring(_i2, j + 1);
      }
    }
  }

  return output;
} //Test


console.log(longestPalindrome("bananas"));
/**************** Question 28****************/
// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function helloWorld(name) {
  console.log(name[0].toUpperCase() + name.substring(1).toLowerCase() + ", Hello World!");
}

function foo(name, callback) {
  callback(name);
}

foo("Duan", helloWorld);
/**************** Question 29****************/
// 29. Write a JavaScript function to get the function name. 

function getName() {
  console.log(arguments.callee.name);
}

getName();