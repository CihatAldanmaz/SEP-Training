// 1. Write a JavaScript function that reverse a number. 

//medthod 1

const reverseNum1 = (num) => {
    let value = num;
    let ret = 0;
    while (value) {
        ret = ret * 10 + value % 10;
        // value = parseInt(value / 10);
        value = Math.floor(value / 10);
    }
    return ret;
}
console.log(reverseNum1(32243));

//method 2

const reverseNum2 = (num) => {
    const ret = Number(num.toString().split('').reverse().join(''));
    return ret;
}

console.log(reverseNum2(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
const checkPalindrome = (input) => {
    let left = 0;
    let right = input.length - 1;

    while (left < right) {
        while (input[left] === ' ') {
            left += 1;
        }
        while (input[right] === ' ') {
            right -= 1;
        }
        if (input[left] !== input[right]) {
            return false;
        }
        left += 1;
        right -= 1;
    }
    return true;
}

console.log(checkPalindrome('madam'));
console.log(checkPalindrome('nurses run'));

// 3. Write a JavaScript function that generates all combinations of a string.
const generateCombination = (word) => {
    const arr = word.split('');
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length + 1; j++) {
            const comb = arr.slice(i, j);
            ret.push(comb.join(''));
        }
    }
    return ret.join(',');
}

console.log(generateCombination('dog'));

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
const alphabeticalOrder = (input) => {
    return input.split('').sort().join('');
}

console.log(alphabeticalOrder('webmaster'));

//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case. 
const convertUpperCase = (input) => {
    const arr = input.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}
console.log(convertUpperCase('the quick brown fox'));

//6. Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string.
const longestWord = (input) => {
    const arr = input.split(' ');
    let max = '';
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            max = arr[i];
            maxLength = arr[i].length;
        }
    }
    return max;
}

console.log(longestWord('Web Development Tutorial'));

//7. Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string.
const countVowels = (input) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (vowels.includes(input[i])) {
            count += 1;
        }
    }
    return count;
}

console.log(countVowels('The quick brown fox'));

//8. Write a JavaScript function that accepts a number as a parameter and check the number isprime or not.
//method 1
const checkPrime1 = (num) => {
    if (num === 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    for (let i = 3; i < num; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(checkPrime1(20));
console.log(checkPrime1(13));

//method 2
// const checkPrime2 = (num) => {

// }

//9. Write a JavaScript function which accepts an argument and returns the type. 
const returnType = (input) => {
    return typeof input;
}

//10. Write a JavaScript function which returns the n rows by n columns identity matrix.

const matrix = (n) => {
    let ret = new Array(n);
    for (let i = 0; i < n; i++) {
        ret[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            if (i === j) {
                ret[i][j] = 1;
            }
            else {
                ret[i][j] = 0;
            }
        }
    }
    return ret;
}
console.log(matrix(10));

//11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively. 
const getNumbers = (input) => {
    input.sort((a, b) => a - b);
    return [input[1], input[input.length - 2]].join(',');
}

console.log(getNumbers([1, 2, 3, 4, 5]));

//12. Write a JavaScript function which says whether a number is perfect. 
const checkPerfect = (num) => {
    if (num === 1) {
        return true;
    }
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
console.log(checkPerfect(6));
console.log(checkPerfect(28));
console.log(checkPerfect(2));

//13. Write a JavaScript function to compute the factors of a positive integer. 
const findFactors = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    return arr.join(',');
}
console.log(findFactors(10));

//14. Write a JavaScript function to convert an amount to coins. 
const convertCoins = (num, coins) => {
    const ret = [];

    coins.sort((a, b) => a - b);

    const dfs = (index, sum, output) => {
        if (sum === num) {
            ret.push([...output]);
            return;
        }
        if (sum > num) {
            return;
        }
        for (let i = index; i < coins.length; i++) {
            output.push(coins[i]);
            dfs(i, sum + coins[i], output);
            output.pop();
        }
    }
    dfs(0, 0, []);
    ret.sort((a, b) => a.length - b.length);
    return ret[0];
}

console.log(convertCoins(46, [25, 10, 5, 2, 1]));

//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is thebases. Accept b and n from the user and display the result.

const exponent = (b, n) => {
    return Math.pow(b, n);
}

console.log(exponent(2, 3));

//16. Write a JavaScript function to extract unique characters from a string.
const extractUniqueCharacters = (input) => {
    const letters = input.split('');
    const lettersSet = new Set();

    for (let i = 0; i < letters.length; i++) {
        lettersSet.add(letters[i]);
    }
    return Array.from(lettersSet).join('');
}

console.log(extractUniqueCharacters('thequickbrownfoxjumpsoverthelazydog') === 'thequickbrownfxjmpsvlazydg');

//17. Write a JavaScript function to  get the number of occurrences of each letter in specifiedstring

const getOccurence = (input) => {
    const letters = input.split('');
    const dic = {};

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] in dic) {
            dic[letters[i]] += 1;
        }
        else {
            dic[letters[i]] = 1;
        }
    }
    return dic;
}
console.log(getOccurence('aaabb'));

//18. Write a function for searching JavaScript arrays with a binary search.

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;

    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (arr[mid] === target) {
            return true;
        }
        else if (arr[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return false;
}

console.log(binarySearch([1, 2, 3], 1));

//19. Write a JavaScript function that returns array elements larger than a number. 
const filterArray = (arr, num) => {
    return arr.filter((value) => value > num);
}

console.log(filterArray([1, 2, 3], 1));

//20. Write a JavaScript function that generates a string id (specified length) of random characters.
const generateString = (n) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const arr = letters.split('');

    let ret = '';

    for (let i = 0; i < n; i++) {
        const num = parseInt(Math.random() * arr.length);
        ret += arr[num];
    }
    return ret;
}
console.log(generateString(10));

//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)combinations in an array. 
const possibleSubsets = (arr, num) => {
    const ret = [];
    const output = [];

    const dfs = (index) => {
        if (output.length === num) {
            ret.push([...output]);
            return;
        }
        for (let i = index; i < arr.length; i++) {
            output.push(arr[i]);
            dfs(i + 1);
            output.pop();
        }
    }

    dfs(0);
    return ret;
}
console.log(possibleSubsets([1, 2, 3], 2));

//22. Write a JavaScript function that accepts two arguments, a string and a letter and the functionwill count the number of occurrences of the specified letter within the string.
const countOccurence1 = (input, letter) => {
    const dic = {};
    const arr = input.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match('[A-Za-z]')) {
            if (arr[i] in dic) {
                dic[arr[i]] += 1;
            }
            else {
                dic[arr[i]] = 1;
            }
        }
    }
    return dic[letter];
}
console.log(countOccurence1('microsoft.com', 'o'));

//23. Write a JavaScript function to find the first not repeated character. 
const firstNoneRepeated = (input) => {
    const dic = {};
    for (let i = 0; i < input.length; i++) {
        if (input[i] in dic) {
            dic[input[i]] += 1;
        }
        else {
            dic[input[i]] = 1;
        }
    }
    for (let i = 0; i < input.length; i++) {
        if (dic[input[i]] === 1) {
            return input[i];
        }
    }
}
console.log(firstNoneRepeated('abacddbec'));

//24. Write a JavaScript function to apply Bubble Sort algorithm. 
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//25. Write a JavaScript function that accept a list of country names as input and returns thelongest country name as output. 
const longestCountryName = (arr) => {
    return arr.sort((a, b) => b.length - a.length)[0];
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

//26. Write a JavaScript function to find longest substring in a given a string without repeatingcharacters.
const longestSubstring = (input) => {
    const dic = {};
    let j = 0;
    let maxLength = 0;
    let ret = '';
    const arr = input.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in dic) {
            dic[arr[i]] += 1;
        }
        else {
            dic[arr[i]] = 1;
        }
        while (dic[arr[i]] > 1) {
            dic[arr[j]] -= 1;
            if (dic[arr[j]] < 0) {
                delete dic[arr[j]];
            }
            j += 1;
        }
        console.log(dic);
        if (i - j + 1 > maxLength) {
            maxLength = i - j + 1;
            ret = arr.slice(j, i + 1).join();
        }
    }
    console.log(maxLength);
    return ret;
}

console.log(longestSubstring("abcabcbb"));

//27. Write a JavaScript function that returns the longest palindrome in a given string. 

const longestPalindrome = (input) => {
    const arr = input.split('');
    const n = arr.length;
    const dp = new Array(n);
    let maxLength = 0;
    let start = 0;
    let end = 0;

    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                dp[i][j] = 1;
            }
            else {
                dp[i][j] = 0;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                if (i - j === 1) {
                    dp[j][i] = 1;
                }
                else if (dp[j + 1][i - 1] === 1) {
                    dp[j][i] = 1;
                }
            }
            if (dp[j][i] === 1) {
                if (i - j + 1 > maxLength) {
                    maxLength = i - j + 1;
                    start = j;
                    end = i;
                }
            }
        }
    }
    return arr.slice(start, end + 1).join('');
}
console.log(longestPalindrome('banana'));

//28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
const test = () => {
    console.log('hello');
}
const passJavascriptFunction = (callBack) => {
    callBack();
}
passJavascriptFunction(test);
//29. Write a JavaScript function to get the function name.
function test1() {
    console.log(arguments.callee.name);
}

test1();
