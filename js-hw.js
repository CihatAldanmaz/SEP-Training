//1.convert a number 
function reverse(n) {
    n = n.toString();
    n = n.split("").reverse().join("");
    return n;
}
console.log(reverse(32243));
//2.check palindrome
function checkPalindrome(str) {
    str = str.replace(/\s/g, "");
    let len = str.length;
    let mid = parseInt(len / 2);
    for (var i = 0; i < mid; i++) {
        if (str[i] == str[len - i - 1]) {
            continue;
        } else
            return false;
    }
    return true;
}
//3.get substrings
function getSubs(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result.join(",");
}
console.log(getSubs("dog"));
//4.alphabatical order
function OrderLetters(str) {
    let arr = str.split("");
    let len = arr.length;
    let temp;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join("");
}
//5.convert first letter of each word into uppercase
function getUpper(str) {
    let arr = str.split(" ");
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}
console.log(getUpper("the quick brown fox"));
//6.word with longest length
function FindLongest(str) {
    let arr = str.split(" ");
    let result = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > result.length) {
            result = arr[i];
        }
    }
    return result;
}
//7.count vowels
function countVowels(str) {
    let n = 0;
    let len = str.length;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (var i = 0; i < len; i++) {
        if (vowels.includes(str[i])) {
            n += 1;
        }
    }
    return n;
}
//8.prime or not
function isPrime(num) {
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(4));
console.log(isPrime(17));
//9.types of input
function checkType(input) {
    return typeof input;
}
//10. returns the n rows by n columns identity matrix
function getMatrix(n) {
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            if (i === j) {
                result[i][j] = 1;
            } else {
                result[i][j] = 0;
            }
        }
    }
    return result;
}
console.log(getMatrix(3));
//11.sort and find 2nd largest and smallest
function getSeconds(arr) {
    arr.sort();
    return [arr[1], arr[arr.length - 2]].join(",");
}
console.log(getSeconds([1, 6, 9, 3, 0]));
//12.perfect number
function isPerfect(num) {
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
//13.all factors of a num
function getFactors(num) {
    let fac = [];
    for (var i = 1; i < num; i++) {
        if (num % i === 0) {
            fac.push(i);
        }
    }
    return fac.join(",");
}
//14.count coins for certain amount
function countCoins(amount, arr) {
    let coins = [];
    for (var i = 0; i < arr.length; i++) {
        if (amount >= arr[i]) {
            amount = amount - arr[i];
            coins.push(arr[i]);
            i--;
        }
    }
    return coins;
}
console.log(countCoins(46, [25, 10, 5, 2, 1]));
//15.n is the exponent,b is the base
function getExponent(b, n) {
    return Math.pow(b, n);
}
//16.get unique chars
function getUniChars(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        //if not in result
        if (result.indexOf(str.charAt(i)) == -1) {
            result += str[i];
        }
    }
    return result;
}
//17.occurancy of each letter
function charCounter(str) {
    var obj = {}; //key-value pair
    str = str.toLocaleLowerCase();
    let key;
    for (var i = 0; i < str.length; i++) {
        key = str[i];
        if (obj[key]) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    }
    return obj;
}
console.log(charCounter("ajhhfahk"))
console.log(getUniChars("thequickbrownfoxjumpsoverthelazydog"));
//18.binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}
//19return array elments >n
function filterArray(arr, n) {
    return arr.filter(function(value) {
        return value > n;
    })
}
//20.generate random string id
function generateId() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let arr = letters.split('');
    let result = '';
    for (let i = 0; i < n; i++) {
        let num = parseInt(Math.random() * arr.length);
        result += arr[num];
    }
    return result;
}
//21.all subset combinations of an array
//22.occourany of a letter in a string
function getOccurancy(str, letter) {
    let n = 0;
    let arr = str.split("");
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === letter) {
            n += 1;
        }
    }
    return n;
}
console.log(getOccurancy('microsoft.com', 'o'));
//23.first not repeated letter
function getFirstnotrepeated(str) {
    let obj = {};
    var key;
    for (let i = 0; i < str.length; i++) {
        key = str[i];
        if (obj[key]) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    }
    for (let key in obj) {
        if (obj[key] === 1) {
            return key;
        }
    }
}
console.log(getFirstnotrepeated("hiiheeloloa"));
//24 bubble sort
function bubbleSort(arr) {
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
//25.return longest country name
function getCountry(arr) {
    arr.sort((a, b) => b.length - a.length);
    return arr[0];
}
getCountry(["Australia", "Germany", "United States of America"])
    //26
    //27
    //28.Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function test() {
    console.log("i m test()");
}

function passFunction(callback) {
    callback();
}
passFunction(test);
//29 get function name
function getFunName() {
    return arguments.callee.name;
}