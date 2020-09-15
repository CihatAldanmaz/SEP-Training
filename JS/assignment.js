//1. Write a JavaScript function that reverse a number. 
function reverseNum(num) {
    num = num.toString();
    return num.split("").reverse().join("");
}
// console.log(reverseNum(3265));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,madam or nurses run.

function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    if(reversedStr === str) {
        return true;
    } else {
        return false;
    }
}
// console.log(isPalindrome("wow"));

// 3. Write a JavaScript function that generates all combinations of a string. 
function allCombinations(str) {
    output = [];
    for(i=0;i<str.length;i++) {
        for(j=i+1;j<str.length+1;j++) {
            output.push(str.slice(i, j));
        }
    }
    return output;
 }

//  console.log(combinator("dog"))

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 

function alphaOrder(str) {
    return str.split('').sort().join('');
}

// console.log(alphaOrder('webmaster'));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
function uppercaseWord(str)
{
  let strArr = str.split(' ');
  let output = [];
    
  for(let i = 0; i < strArr.length; i++){
      output.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
  }
  return output.join(' ');
}
// console.log(uppercaseWord("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
function longestStr(str) {
    let strArr = str.split(' ');
    let output = '';
    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i].length > output.length) {
            output = strArr[i] 
        }
    }
    return output;
}
// console.log(longestStr('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
function numVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
// console.log(numVowels('The quick brown fox'));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
function primeNum(num) {
    if(num === 1) {
        return false;
    } 
    if(num === 2) {
        return true;
    }
    for(let i = 2; i < num; i++) {
        if(num % 2 === 0) {
            return false;
        }
    }
    return true;
}
// console.log(primeNum(23));

// 9. Write a JavaScript function which accepts an argument and returns the type.
function argType(arg) {
    return typeof(arg);
} 
// console.log(argType("1"))

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function idMatrix(n) {
    let matrix = [];
    for(let i = 0; i < n; i++) {
        let arr = [];
        for(let j = 0; j < n; j++) {
            arr.push(0);
        }
        arr[i] = 1;
        matrix.push(arr);
    }
    return matrix;
}
// console.log(idMatrix(10));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
function secondLowestHighest(arr) {
    const orderedArr = arr.sort((a,b) => a - b);
    if(orderedArr.length === 1 || orderedArr.length === 2) {
        return arr;
    }
    if(orderedArr.length === 3) {
        return [arr[0], arr[2]];
    }
    return [arr[1], arr[arr.length -2]];
}
// console.log(secondLowestHighest([4,2,1,3]));

// 12. Write a JavaScript function which says whether a number is perfect. 
function perfectNum(num) {
    let factors = [];
    for(let i = 1; i < num; i++) {
        if(num % i === 0) {
            factors.push(i);
        } 
    }
    let sum = factors.reduce((a,b) => a + b);
    if(num === sum) {
        return true;
    }
    return false;
}
// console.log(perfectNum(28));

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function findFactors(num) {
    let factors = [];
    for(let i = 1; i < num; i++) {
        if(num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
// console.log(findFactors(20));

// 14. Write a JavaScript function to convert an amount to coins. 
function convertCoins(amt, coins) {
    if(amt === 0) {
        return [];
    } else {
        if(amt >= coins[0]) {
            const remainder = amt - coins[0];
            return [coins[0]].concat(convertCoins(remainder, coins));
        } else {
            coins.shift();
            return convertCoins(amt, coins);
        }
    }
}
// console.log(convertCoins(100, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function exponent(b,n) {
    let output = 1;
    for(let i = 0; i < n; i++) {
        output = b * output;
    }
    return output;
}
// console.log(exponent(5,10));

// 16. Write a JavaScript function to extract unique characters from a string. 
function uniqueChars(str) {
    // let output = str;
    let seen = '';
    for(let i = 0; i < str.length; i++) {
        if(seen.indexOf(str[i]) === -1) {
            seen += str[i];
        }
    }
    return seen;
}
// console.log(uniqueChars('thequickbrownfoxjumpsoverthelazydog'));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function numOccurrences(str) {
    let output = {};
    for(let i = 0; i < str.length; i++) {
        if(output[str[i]]){
            output[str[i]]++;
        } else {
            output[str[i]] = 1;
        }
    }
    return output;
}
// console.log(numOccurrences('aaabbbbbbbb'));

// 18. Write a function for searching JavaScript arrays with a binary search. 
function binarySearch(arr, element) {
    const mid = Math.floor(arr.length / 2);
    if(arr[mid] === element) {
        return mid;
    } else if(arr.length === 1) {
        return null;
    } else if(arr[mid] < element) {
        const newArr = arr.slice(mid + 1);
        const res = binarySearch(newArr, element);
        if(res === null) {
            return null; 
        } else {
            return mid + 1 + res;
        }
    } else {
        const arr1 = arr.slice(0, mid);
        return binarySearch(arr1, element);
    }
}
const myArr = [1,2,3,4,5,6,7,8,9,10];
// console.log(binarySearch(myArr, 5));

// 19. Write a JavaScript function that returns array elements larger than a number. 
function largerThan(arr, num) {
    let output = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > num) {
            output.push(arr[i]);
        }
    }
    return output;
}
// console.log(largerThan([1,2,3,4], 1));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
function stringId(len) {
    const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let output = "";
    for(let i= 0; i < len; i++) {
        output += charList[Math.floor(Math.random() * charList.length)]
    }
    return output;
}
// console.log(stringId(20));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// function subSets(arr, len) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {

//     }

// }

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
function numOccurrences(str, letter) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === letter) {
            count++;
        }
    }
    return count;
}
// console.log(numOccurrences('aaaa', 'a'));

// 23. Write a JavaScript function to find the first not repeated character. 
function nonRepeat(str) {
    let count = {};
    for(let i = 0; i < str.length; i++) {
        if(count[str[i]]){
            count[str[i]]++;
        } else {
            count[str[i]] = 1;
        }
    }
    const entries = Object.entries(count);
    for(let j = 0; j < entries.length; j++) {
        if(entries[j][1] === 1) {
            return entries[j][0];
        }
    }
}
// console.log(nonRepeat('abacddbec'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 


// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
function longestName(list) {
    let longest = list[0];
    for(let i = 1; i < list.length; i++) {
        if(list[i].length > longest.length) {
            longest = list[i];
        }
    }
    return longest;
}
// console.log(longestName(["Australia", "Germany", "United States of America"]))

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.


// 27. Write a JavaScript function that returns the longest palindrome in a given string. 


// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function functionParam(cb){
    cb();
}
function sayHello() {
    console.log('Hello')
};
// functionParam(sayHello);

// 29. Write a JavaScript function to get the function name. 
function myFunction() {
    return arguments.callee.name;
}
// console.log(myFunction());