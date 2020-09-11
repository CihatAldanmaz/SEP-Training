// author: Pu Du
// email: du.pu@outlook.com

// Question 1
// assume number is non-negative integer
// Time O(n) n is the number of digits
// Space 0(n)

const reverse = (number) => {
  return parseInt(number.toString().split('').reverse().join(''));
};

// Question 2
// Time O(n)
// Space O(n)

const isPalindrome = (str) => {
  return str.split() === str.split().reverse();
};

// Question 3
// Time O(n^2)
// Space O(n^2)

const combination = (str) => {
  const array = str.split('');
  let ans = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      ans.push(array.slice(i, j).join(''));
    }
  }
  return ans.join();
};

// Question 4
// Time O(nlogn)
// Space O(n)

const alphabeticalOrder = (str) => {
  return str.split('').sort().join('');
};

// Question 5
// Time O(n)
// Space O(n)

const capitalizeFirstLetter = (str) => {
  str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

// Question 6
// Time O(n)
// Space O(n)

const longestWord = (str) => {
  return str.split(' ').sort((a, b) => b.length - a.length)[0];
};

// Question 7
// Time O(n)
// Space O(n)

const countVowels = (str) => {
  const vowels = new Set('aeiouAEIOU'.split(''));
  let ans = 0;

  str.split('').forEach((letter) => {
    if (vowels.has(letter)) {
      ans += 1;
    }
  });
  return ans;
};

// Question 8
// Time O(n^(0.5))
// Space O(1)

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i <= parseInt(number ** 0.5 + 1); i++) {
    if (number % 2 === 0) {
      return false;
    }
  }

  return true;
};

// Question 9
// Time
// Space

const typeOfArgument = (arg) => {
  return typeof arg;
};

// Question 10
// Time O(n^2)
// Space O(n^2)

const identityMatrix = (n) => {
  return Array(n).fill(Array(n).fill(1));
};

// Question 11

// solution 1: Time O(nlogn)
//             Space O(1)  in-place sorting

const secondLowestAndGreatest = (arr) => {
  if (arr.length < 3) {
    return false;
  }

  arr.sort((a, b) => a - b);

  return [arr.slice(1, 2), arr.slice(-2, -1)].join();
};

// solution 2: Time O(n)
//             Space O(1)
// just scan the whole array once. Too lazy to implement it. LOL.

// Question 12
// Time O(n)
// Space O(n)

// Question 13
// Time O(n)
// Space O(1)

const factorial = (n) => {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

// Question 14
// Time O(nk) n is amount and k in number of coins
// Space O(n)
// this question is basically coin change

// Question 15

const exponential = (b, n) => console.log(b ** n);

// Question 16
// Time O(n)
// Space O(n)

const uniqueCharacters = (str) => {
  const s = new Set(str.split(''));
  return [...s].join('');
};

// Question 17
// Time O(n)
// Space O(1) assume there are only English chars in the string

const occurrences = (str) => {
  let map = {};

  str.split('').forEach((letter) => {
    if (letter in map) {
      map[letter] += 1;
    } else {
      map[letter] = 1;
    }
  });

  return map;
};

// Question 18
// Time O(logn)
// Space O(1)

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    mid = left + parseInt((right - left) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      mid = right - 1;
    } else {
      mid = left + 1;
    }
  }

  return -1;
};

// Question 19
// Time O(n)
// Space O(n)

const largerThan = (arr, target) => {
  return arr.filter((number) => number > target);
};

// Question 20
// Time O(n)
// Space O(n)

const stringId = (length) => {
  const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
    ''
  );
  let id = '';

  for (let i = 0; i < length; i++) {
    id += charSet[Math.floor(Math.random() * charSet.length)];
  }

  return id;
};

// Question 21
// Time O(nk) k is the length of subset
// Space O(nk)

// Question 22
// Time O(n)
// Space O(1)

const countOccurrences = (str, target) => {
  let ans = 0;

  str.split('').forEach((letter) => {
    if (letter === target) {
      ans += 1;
    }
  });

  return ans;
};

// Question 23
// Time O(n)
// Space O(n)

const firstNonrepeatedCharacter = (str) => {
  let map = {};

  str.split('').forEach((letter) => {
    if (letter in map) {
      map[letter] += 1;
    } else {
      map[letter] = 1;
    }
  });

  for (i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) {
      return str[i];
    }
  }
};

// Question 24
// Time O(n^2)
// Space O(1) in-place sorting

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// Question 25
// Time O(n)
// Space O(n)

const longestCountryName = (arr) => {
  return arr.sort((a, b) => b.length - a.length)[0];
};

// Question 26
// Time
// Space

// Question 27
// Time
// Space

// Question 28

const funcTakefunc = (func) => {
  return func;
};

// Question 29

const getFuncName = (func) => {
  return func.name;
};
