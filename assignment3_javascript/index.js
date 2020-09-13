/**************** Question 1****************/
// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 
function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""), 10);
};
//Test
console.log(reverseNumber(12345));

/**************** Question 2****************/
// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
//Test
console.log(isPalindrome("madam"));
console.log(isPalindrome("abc"));

/**************** Question 3****************/
// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 
function findSubstring(str) {
    let output = [];
    for (let i=0; i<str.length; i++) {
        for (let j=i; j<str.length; j++) {
            output.push(str.substring(i,j+1))
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
}
//Test
console.log(alphabeticalString("webmaster"));

/**************** Question 5****************/
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of 
// each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '
function capitalizeString(str) {
    return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
}
//Test
console.log(capitalizeString('the quick brown fox'));

/**************** Question 6****************/
// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'
function longestWord(str) {
    let arr = str.split(" ");
    let maxLen = 0;
    let output = "";
    for (let i=0; i<arr.length; i++) {
        if (arr[i].length > maxLen) {
            maxLen = arr[i].length;
            output = arr[i];
        }
    }
    return output;
}
//Test
console.log(longestWord("Web Development Tutorial"));

/**************** Question 7****************/
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
function vowelCount(str) {
    let arr = ["a", "e", "i", "o", "u"];
    let vowelSet = new Set(arr);
    let count = 0;

    for (let char of str) {
        if (vowelSet.has(char)){
            count ++;
        }
    }
    return count;   
}
//Test
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
    for (let x=2; x<Math.sqrt(num); x++) {
        if (num % x === 0) {
            return false;
        }
    }
    return true;
}
//Test
console.log(isPrime(23));

/**************** Question 9****************/
// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function findType(input) {
    return typeof input;
}

console.log(findType({name:"2"}));

/**************** Question 10****************/
// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function identityMatrix(n) {
    let arr = [];
    for (let i=0; i<n; i++) {
        arr[i] = [];
        for (let j=0; j<n; j++) {
            arr[i][j] = 0;
            if (i===j) {
                arr[i][j] = 1;
            }
        }
    }
    return arr;
}
//Test
console.log(identityMatrix(5));

/**************** Question 11****************/
// 11. Write a JavaScript function which will take an array of numbers stored and find the 
// second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 
function findSecondNumbers(arr) {
    let uniqueSet = new Set(arr);
    let uniqueArr = [...uniqueSet];
    uniqueArr.sort((a,b)=>a-b);
    return uniqueArr[1].toString() + "," + uniqueArr[uniqueArr.length-2].toString()
}
//Test
console.log(findSecondNumbers([1,2,3,4,5]));

/**************** Question 12****************/
// 12. Write a JavaScript function which says whether a number is perfect. 
function isPerfect(num) {
    if (num < 1) return false;
    let curSum = 0;
    for (let i=1; i<num; i++) {
        if (num % i === 0) {
            curSum += i;
        }
    }
    return curSum === num;
}
//Test
console.log(isPerfect(0));

/**************** Question 13****************/
// 13. Write a JavaScript function to compute the factors of a positive integer. 
function findFactors(num) {
    let arr = [];
    if (num < 1) return [];
    for (let i=1; i<=num; i++){
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
    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    coins.sort((a,b) => b-a);
    pi = Array(coins.length);
    for (let j=0; j<=coins.length; j++) {
        pi[j] = Array(amount+1).fill(0);
    }

    for (let i=1; i<=amount; i++) {
        for (let j=0; j<coins.length; j++) {
            if (i>=coins[j] && dp[i-coins[j]] !== Infinity) {
                dp[i] = Math.min(dp[i], dp[i-coins[j]]+1);
                if (dp[i] === dp[i-coins[j]] + 1) {
                    pi[j][i] = 1;
                }
            }
        }
    }
    if (dp[amount] === Infinity) return null;

    let output = [];
    let remain = amount;
    while (remain > 0){
        for (let j=0; j<coins.length; j++) {
            if (pi[j][remain] === 1) {
                output.push(coins[j])
                remain -= coins[j];
            }
        }
    }
    return output;
}
//Test
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

/**************** Question 15****************/
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
// Accept b and n from the user and display the result. 
function computeExponential() {
    let n = parseInt(prompt("Please enter a exponent for calculation: "), 10);
    let b = parseInt(prompt("Please enter a base for calculation: "), 10);
    alert(`The result of ${b} to the power of ${n} is ${b**n}.`)
}
//Test
computeExponential();

/**************** Question 16****************/
// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function uniqueString(str) {
    let mySet = new Set();
    let output = "";
    for (let char of str) {
        if (!mySet.has(char)) {
            output += char;
            mySet.add(char);
        }
    }
    return output;
}
//Test
console.log(uniqueString("thequickbrownfoxjumpsoverthelazydog"));

/**************** Question 17****************/
// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function getFrequency(str) {
    let freq = {};
    for (let char of str) {

        if (freq[char]) {
            freq[char] ++;
        } else {
            freq[char] = 1;
        }
    }
    return freq;
}
//Test
console.log(getFrequency("abccc"));

/**************** Question 18****************/
// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length-1;
    let mid = 0;
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
}
//Test
console.log(binarySearch([3,4,6,7,9,14,27], 4));

/**************** Question 19****************/
// 19. Write a JavaScript function that returns array elements larger than a number. 
function findLargerNumber(arr, target) {
    let output = [];
    for (let num of arr) {
        if (num > target) {
            output.push(num);
        }
    }
    return output;
}
//Test
console.log(findLargerNumber([3,4,6,7,9,14,27], 6));

/**************** Question 20****************/
// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomCharGenerator(id) {
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let output = "";

    for (let i=0; i<id; i++) {
        output += charList[Math.floor(Math.random() * charList.length)];
    }
    return output;
}
//Test
console.log(randomCharGenerator(8));

/**************** Question 21****************/
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function fixLengthSubsets(arr, target) {
    arr.sort((a,b) =>a-b);
    let output = [];
    let path = [];
    helper(arr, target, 0, path, output);
    return output;
}

function helper(arr, target, index, path, output) {
    if (path.length === target) {
        output.push(Array.from(path));
        return;
    }

    for (let i=index; i< arr.length; i++) {
        if (i !== index && arr[i] === arr[i-1]) {
            continue;
        }
        path.push(arr[i]);
        helper(arr, target, i+1, path, output);
        path.pop();
    }
}
//Test
console.log(fixLengthSubsets([1,2,2,3], 2));

/**************** Question 22****************/
// 22. Write a JavaScript function that accepts two arguments, 
// a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
function countChar(str, letter) {
    let count = 0;
    for (let char of str) {
        if (letter === char) {
            count ++;
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
    let unique = new Set();
    let seen = new Set();
    for (let char of str) {
        if (seen.has(char)) {
            if (unique.has(char)){
                unique.delete(char);
            }
        } else {
            seen.add(char);
            unique.add(char);
        }
    }
    return Array.from(unique.keys())[0];
}
//Test
console.log(firstNonRepeat('abacddbec'));

/**************** Question 24****************/
// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i=0; i<arr.length-1; i++) {
            if (arr[i] < arr[i+1]) {
                tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                isSorted = false;
            }
        }
    }
    return arr;
}
//Test
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

/**************** Question 25****************/
// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
function longestCountryName(names) {
    let output = "";
    let maxLen = 0;
    names.forEach(name => {
        if (maxLen < name.length) {
            maxLen = name.length;
            output = name;
        }
    });
    return output;
}
//Test
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

/**************** Question 26****************/
// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestSubstring(str) {
    let unique = new Set();
    let left = 0;
    let maxLen = 0;
    let maxLeft = 0;
    for (let right = 0; right < str.length; right++) {
        while (unique.has(str[right])){
            unique.delete(str[left]);
            left ++;
        }
        if (maxLen < right - left + 1) {
            maxLen = right - left + 1;
            maxLeft = left;
        }
        unique.add(str[right]);
    }
    return str.substring(left, left + maxLen);
}
//Test
console.log(longestSubstring("aabcbdf"));

/**************** Question 27****************/
// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
function longestPalindrome(str) {
    let n = str.length;
    let output = str[0];
    let dp = Array.from({length: n}, ()=> Array.from({length:n}, ()=>false));

    for (let i=0; i<n; i++) {
        dp[i][i] = true;
    }
    for (let i=0; i<n-1; i++) {
        if (str[i] === str[i+1]) {
            dp[i][i+1] = true;
            output = str.substring(i,i+2);
        }
    }
    let j = 0;
    for (let delta=2; delta<n; delta++) {
        for (let i=0; i<n-delta; i++) {
            j = i + delta;
            if (str[i] === str[j] && dp[i+1][j-1]) {
                dp[i][j] = true;
                output = str.substring(i, j+1);
            }
        }
    }
    return output;
}
//Test
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



