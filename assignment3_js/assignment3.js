// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 

function reverseNumber(num) {
    res = num.toString().split("").reverse().join("");
    return res;
}
console.log('---1---');
console.log(reverseNumber(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function checkPalindrome(str) {
    var start = 0;
    var end = str.length - 1;

    while (start < end) {
        if (str[start] === str[end]) {
            start += 1;
            end -= 1;
        } else {
            return false;
        }
    }

    return true;
}
console.log('---2---');
console.log(checkPalindrome('aba'));
console.log(checkPalindrome('abc'));

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

function generateCombinations(str) {
    res = [];
    for (let i = 0; i < str.length; i++) {
        var tmp = str[i];
        res.push(tmp);
        for (let j = i+1; j < str.length; j++) {
            tmp += str[j];
            res.push(tmp);
        }
    }
    return res;
 }
 console.log('---3---');
 console.log(generateCombinations('dog'));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sortString(str) {
    str = str.split("");
    str = str.sort();
    str = str.join("");
    return str;
}
console.log('---4---');
console.log(sortString('sdfdmsgdferjtfsf'));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

function convertFistLetter(str) {
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        let word = str[i];
        word = word[0].toUpperCase() + word.slice(1);
        str[i] = word;
    }
    return str.join(" ");
}
console.log('---5---');
console.log(convertFistLetter('the qucick brown fox'));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

function findLongestWord(str) {
    var res = -1;
    var maxi = -1;
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        let word = str[i];
        if (word.length > maxi) {
            maxi = word.length;
            res = word;
        }
    }
    return res;
}
console.log('---6---');
console.log(findLongestWord('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

function countTheVowels(str) {
    var vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    var res = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.has(str[i])) res += 1;
    }
    return res
}
console.log('---7---');
console.log(countTheVowels('The quick brown fox'));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function checkNumberPrime(num) {
    if (num === 1) return true;
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log('---8---');
console.log(checkNumberPrime(1));
console.log(checkNumberPrime(2));
console.log(checkNumberPrime(5));
console.log(checkNumberPrime(8));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function checkType(argu) {
    return typeof(argu);
}
console.log('---9---');
console.log(checkType(checkType));
console.log(checkType({}));
console.log(checkType(123));
console.log(checkType('false'));
console.log(checkType(false));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function identityMatrix(n) {
    var res = [];
    for (let i = 0; i < n; i++) {
        let tmp = [];
        for (let j = 0; j < n; j ++) {
            if (i === j) {
                tmp.push(1);
            } else {
                tmp.push(0);
            }
        }
        res.push(tmp);
    }
    return res;
}
console.log('---10---');
console.log(identityMatrix(3));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 
function secondLowestAndSecondGreatestNumber(arr) {
    arr.sort();
    return [arr[1], arr[arr.length-2]].join(' ');
}
console.log('---11---');
console.log(secondLowestAndSecondGreatestNumber([1,2,3,4,5]));

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function checkPerfect(num) {
    var divisors = [];
    for (let i = 1; i< num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    var sum = divisors.reduce((a, b) => a + b, 0)
    return sum === num;
}
console.log('---12---');
console.log(checkPerfect(28));
console.log(checkPerfect(128));

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function computeFactors(num) {
    var res = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            res.push(i);
        }
    }
    return res;
}
console.log('---13---');
console.log(computeFactors(16));

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
function convertAmountToCoins(num, coins) {
    var res = [];
    var tmp = 0;
    coins.sort((a, b) => b - a);
    for (let i = 0; i < coins.length; i++) {
        var coin = coins[i];
        while (tmp + coin <= num) {
            tmp += coin;
            res.push(coin);
        }
    }
    return res;
}
console.log('---14---');
console.log(convertAmountToCoins(46, [25, 10, 5, 2, 1]))

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

function exponent(b, n) {
    var res = 1;
    for (let i = 1; i <= n; i++) {
        res *= b;
    }
    return res;
}
console.log('---15---');
console.log(exponent(2, 3));

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

function extractUniqueCharacters(str) {
    var res = "";
    var counter = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (counter.hasOwnProperty(char)) {
            counter[char] += 1;
        } else {
            counter[char] = 1;
        }
    }
    
    for (key of Object.keys(counter)) {
        if (counter[key] === 1) {
            res += key;
        }
    }

    return res;
}
console.log('---16---');
console.log(extractUniqueCharacters('thequickbrownfoxjumpsoverthelazydog'));
// I am not sure the example is correct.

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function numberOfOccurrence(str) {
    var res = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (res.hasOwnProperty(char)) {
            res[char] += 1;
        } else {
            res[char] = 1;
        }
    }
    return res;
}
console.log('---17---');
console.log(numberOfOccurrence('thequickbrownfoxjumpsoverthelazydog'));

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binarySearch(arr, target) {
    var start = 0;
    var end = arr.length;
    var mid;
    arr.sort((a, b) => a - b);
    while (start + 1 < end) {
        mid = parseInt((start + end) / 2)
        if (arr[mid] > target) {
            end = mid;
        } else if (arr[mid] < target) {
            start = mid;
        } else {
            return target;
        }
    }
    if (arr[start] === target) return target;
    if (arr[end] === target) return target;
}
console.log('---18---');
console.log(binarySearch([100, 234, 56, 23, 87, 45, 3, 23], 23));

// 19. Write a JavaScript function that returns array elements larger than a number. 
function elementsLargerThanNumber(arr, num) {
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log('---19---');
console.log(elementsLargerThanNumber([5, 523, 34, 3, 2, 78, 28], 57));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateRandomCharacters(id) {
    var res = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < id; i++) {
        res += char_list[parseInt(Math.random() * char_list.length)];
    }
    return res;
}
console.log('---20---');
console.log(generateRandomCharacters(8));
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function allPossibleSubset(arr, length) {
    var res = [];

    function DFS(subarr, arr, l){
        if (l === 0) {
            return res.push(subarr);
        }
        for (let i = 0; i < arr.length; i++) {
            var new_res = subarr.slice();
            new_res.push(arr[i]);
            final_res = DFS(new_res, arr.slice(i+1), l-1);
        }
    }

    DFS([], arr, length);
    return res;
}
console.log('---21---');
console.log(allPossibleSubset([1, 2, 3], 2));
//  example is not correct

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
function countSpecificedLetter(str, char) {
    var res = 0;
    for (let i = 0; i < str.length; i++) {
        if (char === str[i]){
            res += 1;
        }
    }
    return res;
}
console.log('---22---');
console.log(countSpecificedLetter('microsoft.com', 'o' ));

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 
function findFirstNotRepeartedChar(str) {
    var counter = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (counter.hasOwnProperty(char)) {
            counter[char] += 1;
        } else {
            counter[char] = 1;
        }
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (counter[char] === 1) {
            return char;
        }
    }
}
console.log('---23---');
console.log(findFirstNotRepeartedChar('abacddbec'));


// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
    var i, j, tmp;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - i; j++) {
            if (arr[j] < arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}
console.log('---24---');
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
function longestCountryName(arr) {
    var res = "", i, country;
    for (i = 0; i < arr.length; i++) {
        country = arr[i];
        if (country.length > res.length) {
            res = country;
        }
    }
    return res;
}
console.log('---25---');
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestSubtring(input) {
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
        curr_char = chars[i];
        if (!hash[chars[i]]) { 
            str += curr_char; 
            hash[chars[i]] = {index:i};
        }
        else {
            if(longest_string.length <= str.length){
                longest_string = str;
            }
            var prev_dupeIndex = hash[curr_char].index;
            var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
            str = str_FromPrevDupe + curr_char;
            hash = {};
            for (var j = prev_dupeIndex + 1; j <= i; j++) {
                hash[input.charAt(j)] = {index:j};
            }
        }
    }
return longest_string.length > str.length ? longest_string : str;
}
console.log('---26---');
console.log(longestSubtring('sdfsfbgelwrewrfgh'));

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function isPalindrome(str) {
    var res = str.split("").reverse().join("");
    return str == res;
 }
    
function longestPalindrome(str){
    var maxi = 0, i;
    var res = '';
    for(i = 0; i < str.length; i++) {
        var substring = str.substr(i, str.length);
        for(var j = substring.length; j>=0; j--) {
            var sub_subs_str = substring.substr(0, j);
            if (sub_subs_str.length <= 1)
                continue;
    
            if (isPalindrome(sub_subs_str)){
                if (sub_subs_str.length > maxi) {
                    maxi = sub_subs_str.length;
                    res = sub_subs_str;
                }
            }
        }
    }
    return res;
    }
console.log('---27---');
console.log(longestPalindrome('aaaaaasdfbbbbbbbbbbbbbbbbbdsfg'));
// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function passFunctionAsParameter(func) {
    console.log('I am going to print hello');
    func();
}
function sayHello() {
    console.log('Hello every one!');
}
console.log('---28---');
passFunctionAsParameter(sayHello);

// 29. Write a JavaScript function to get the function name. 
function callNAme() {
    console.log(arguments.callee.name);
}
console.log('---29---');
callNAme();