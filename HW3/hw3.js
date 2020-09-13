// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 

function rev(x) {
    let s = x.toString().split('')
    let res = ''
    if (s[0] === '-') {
        res += s[0] + s.slice(1).reverse().join('')
        return res;
    } else {
        res += s.reverse().join('')
    }
    return res;
}
console.log(rev(112345), rev(-112345), rev(0))

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function checkPaindrome(s) {
    let i = 0
    let j = s.length
    if (j === 0) return false
    if (j === 1) return true
    j--
    while (i < j) {
        if (s.charAt(i) !== s.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true
}
console.log(checkPaindrome('madam'), checkPaindrome('aaab'))


// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 
function strCom(s) {
    if (s.length < 0) return ""
    let i = 0;
    let j = s.length - 1
    let k = 1
    let res = []
    while (k <= j + 1) {
        res.push(s.slice(i, k))
        if (k === j + 1) {
            i++
            k = i
        }
        k++
    }
    let output = ''
    for (let a = 0; a < res.length; a++) {
        if (a === res.length - 1) {
            output += res[a]
        } else {
            output += res[a] + ','
        }

    }
    return output
}
console.log(strCom('dog'))


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function alph(s) {
    if (s.length <= 0) return ''
    let arr = s.split('')
    let res = arr.sort()
    return res.join('')
}
console.log(alph('webmaster'))


// 5. Write a JavaScript function that accepts a string as a parameter and converts 
// the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '
function upper(s) {
    if (s.length <= 0) return ''
    let array = s.split(' ')
    let res = ''
    array.forEach(element => {
        res += element.charAt(0).toUpperCase() + element.slice(1) + ' ';
    })
    return res.trim()
}
console.log(upper('the quick brown fox'))


// 6. Write a JavaScript function that accepts a string as 
// a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'
function findLong(s) {
    let arr = s.split(' ')
    let maxIdx = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].length <= arr[i + 1].length) {
            maxIdx = i + 1;
        }
    }
    return arr[maxIdx];
}
console.log(findLong('Web Development Tutorial'))

// 7. Write a JavaScript function that accepts a string as a 
// parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and 
// a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
function countV(s) {
    s = s.toLowerCase();
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let cnt = 0;
    for (let e of s) {
        if (vowel.includes(e)) cnt++
    }
    return cnt;
}
console.log(countV('The quick brown fox'))


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other 
// than 1 and itself.
function checkPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return n > 1
}
console.log(checkPrime(7))


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, 
// number, string, and undefined.
function returnType(arg) {
    return typeof (arg);
}
console.log(returnType(null))
console.log(returnType(true))
console.log(returnType(5))
console.log(returnType('5'))

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function createM(n) {
    let r = new Array(n);
    for (let i = 0; i < r.length; i++) {
        r[i] = new Array(n);
    }
    return r
}
console.log(createM(3))

// 11. Write a JavaScript function which will take an array of numbers 
// stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 
function f(arr) {
    if (arr.length === 0) return ''
    if (arr.length === 1) return arr[0]
    if (arr.length === 2) {
        arr.sort()
        return arr[0] + ',' + arr[1]
    }
    let unique = [...new Set(arr)]
    unique.sort((a, b) => a - b);
    let res = ''
    res += unique[1] + ',' + unique[unique.length - 2]
    return res
}
console.log(f([5, 4, 5, 5, 1, 1, 2, 2, 1]))


// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive 
// integer that is equal to the sum of its proper positive divisors, that is, 
// the sum of its positive divisors excluding the number itself (also known as 
//     its aliquot sum). Equivalently, a perfect number is a number that is half 
//     the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper 
// positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to 
// half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next 
// perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function perfectN(n) {
    let res = 0
    for (let i = 1; i < n; i++) {
        if (n % i === 0) res += i;
    }
    if (res === n) return true;
    else return false;
}
console.log(perfectN(6))
console.log(perfectN(9))
console.log(perfectN(28))


// 13. Write a JavaScript function to compute the factors of a positive integer. 
function factors(n) {
    if (n < 0 || !Number.isInteger(n)) return 'Input number is not a positive integer';
    let res = []
    for (let i = 0; i < n; i++) {
        if (n % i === 0 && !res.includes(i)) res.push(i)
    }
    return res;
}
console.log(factors(100))

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
function coins(n, arr) {
    if (n <= 0) return 'Amount is less or equal to 0, no coins';
    arr.sort((a, b) => b - a);
    let res = []
    for (let i = 0; i < arr.length; i++) {
        while (n >= arr[i]) {
            res.push(arr[i]);
            n -= arr[i]
        }
    }
    return res
}
console.log(coins(25, [5, 1, 10]))

// 15. Write a JavaScript function to compute the value of bn where n is 
// the exponent and b is the bases. Accept b and n from the user and display the result. 
function cal(b, n) {
    return Math.pow(b, n)
}
console.log(cal(2, 3))

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string :  "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function ex(s) {
    let res = [...new Set(s)]
    return res.join('')
}
console.log(ex('thequickbrownfoxjumpsoverthelazydog'))

// 17. Write a JavaScript function to get the number 
// of occurrences of each letter in specified string. 
function countFreq(s) {
    s = s.toLowerCase()
    let map = {}
    s.split('').forEach((e) => {
        map[e] = map[e] ? map[e] + 1 : 1
    })
    return map
}
console.log(countFreq('zzZaaAAbcDDdddeef'))

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller 
// chunks until it finds the desired value.
function bs(arr, target) {
    //deep copy original array
    let deepCopiedArray = arr.concat([])

    arr = arr.sort((a, b) => a - b)
    let l = 0
    let r = arr.length
    while (l < r) {
        let mid = Math.floor(l + (r - l) / 2)
        if (target === arr[mid]) {
            return target + ' is found at index of ' + deepCopiedArray.indexOf(arr[mid]) + '.'
        } else if (target <= arr[mid]) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    return target + ' is not found.'
}
console.log(bs([5, 2, 3, 1, 4], 4))


// 19. Write a JavaScript function that returns array elements larger than a number. 
function elthn(arr, n) {
    if (arr.length < 0 || n === NaN) return ''
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) res.push(arr[i])
    }
    return res
}
console.log(elthn([1, 2, 3, 4, 5, 6, 4, 3, 2, 1, 10], 2))

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomG(n) {
    let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let res = ''
    while (n > 0) {
        res += list.charAt(Math.random() * list.length)
        n--
    }
    return res
}
console.log(randomG(5))


// 21. Write a JavaScript function to get all possible subset with a fixed 
// length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function subset(arra, arra_size) {
    var result_set = [],
        result;


    for (var x = 0; x < Math.pow(2, arra.length); x++) {
        result = [];
        i = arra.length - 1;
        do {
            if ((x & (1 << i)) !== 0) {
                result.push(arra[i]);
            }
        } while (i--);

        if (result.length >= arra_size) {
            result_set.push(result);
        }
    }

    return result_set;
}

console.log(subset([1, 2, 3], 2));

// 22. Write a JavaScript function that accepts two arguments, a string and a 
// letter and the function will count the number of occurrences of the specified 
// letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
function countF(s, l) {
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === l) cnt++
    }
    return cnt
}
console.log(countF('microsoft.com', 'o'))


// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 
function fnrc(s) {
    for (let i = 0; i < s.length; i++) {
        let temp = s.charAt(i)
        if (s.indexOf(temp) === s.lastIndexOf(temp)) return temp
    }
    return 'not found'
}
console.log(fnrc('abacddbec'))

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, 
// is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, 
// comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubble(input) {
    let len = input.length
    let swapped
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (input[i] < input[i + 1]) {
                let temp = input[i]
                input[i] = input[i + 1]
                input[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return input
}
console.log(bubble([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

// 25. Write a JavaScript function that accept a list of country names as input and returns the 
// longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
// function longest(arr) {
//     let res = arr[0]
//     for(let i = 1; i < arr.length; i++) {

//         if(arr[i].length > res.lengh) res = arr[i]
//     }
//     return res
// }
// console.log(longest(["Germany", "abc", "United States of America"]))
function longest(arr) {
    var res = arr[0];
    for (let i = 1; i < arr.length; i++) {

        if (arr[i].length > res.length) {
            res = arr[i];
        }
    }
    return res;
}
console.log(longest(["Germany", "abc", "United States of America"]))


// 26. Write a JavaScript function to find longest substring in a 
// given a string without repeating characters. 
function swrc(s) {
    if (s === null || s.length <= 0) return ''
    let temp = ''
    let res = ''
    let arr = s.split('')
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            if(temp.includes(arr[j])) break
            else temp += arr[j]
        }
        if(res.length < temp.length) res = temp
        temp = ''
    }
    return res
}
console.log(swrc('abcabcbbbbbbbbshijk'))

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or 
// longest symmetric factor problem is the problem of finding a maximum-length contiguous 
// substring of a given string that is also a palindrome. For example, the longest palindromic 
// substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to 
// be unique; for example, in the string "abracadabra", there is no palindromic substring with 
// length greater than three, but there are two palindromic substrings with length three, namely, 
// "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, 
// all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings)
//  rather than returning only one substring or returning the maximum length of a palindromic substring.
function lpiags(s){
    //double pointers
    //O(N^2)
    if(s === null || s.length <= 0) return ''
    if(s.length == 1) return s
    let start = 0
    let end = 0
    for(let i = 0; i < s.length; i++){
        let c = s.charAt(i);
        let left = i
        let right = i
        while(left >= 0 && s.charAt(left) === c) left--
        while(right < s.length && s.charAt(right) === c) right++
        while(left >= 0 && right < s.length) {
            if(s.charAt(left) !== s.charAt(right)) break
            left--
            right++
        }
        left = left + 1
        if(end - start < right - left){
            end = right
            start = left
        }
    }
    return s.substring(start, end)
}
console.log(lpiags('babad'))

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function add(x, y){
    return x + y
}
function compute(x, y, add){
    return add(x, y)
}
console.log(compute(1,2,add))

// 29. Write a JavaScript function to get the function name. 
const AppleFunction = function() {}
console.log(AppleFunction.name)