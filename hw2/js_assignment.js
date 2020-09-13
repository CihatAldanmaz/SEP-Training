//#1
function reverseNumber(num) {
    let revNum = 0;
    while (num > 0) {
        revNum = revNum * 10 + Math.floor(num % 10);
        num = Math.floor(num / 10);
    }
    return revNum;
}

//#2
function checkPalindrome(str) {
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

//#3 
function combinationString(str) {
    var lenStr = str.length;
    var result = [];
    var indexCurrent = 0;
    while (indexCurrent < lenStr) {
        var cur = str.charAt(indexCurrent);
        var arrTemp = [cur];
        for (var x in result) {
            arrTemp.push(result[x] + cur);
        }
        result = result.concat(arrTemp);
        indexCurrent++;
    }
    return result;
}

//#4
function alphabeticalOrder(str) {
    let arr = str.split('')

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (arr[i] < arr[j])
                [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    return arr.join('')
}

//#5
function upperCase(str) {
    var arr = str.split(' ');
    var newArr = [];

    for (var x = 0; x < arr.length; x++) {
        newArr.push(arr[x].charAt(0).toUpperCase() + arr[x].slice(1));
    }
    return newArr.join(' ');
}

//#6
function longest_word(str) {
    var array = str.split(" ");
    var maxLength = array[0];

    for (var x = 1; x < array.length; x++) {
        if (maxLength.length < array[x].length) {
            maxLength = array[x];
        }
    }
    return maxLength;
}

//#7
function countVowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u',
        'A', 'E', 'I', 'O', 'U'];
    let count = 0;

    for (var letter of str) {
        if (vowels.includes(letter)) {
            count += 1;
        }
    }
    return count;
}

//#8
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

//#9
function outputType(item) {
    console.log(typeof item)
}

//#10
function identityMatrix(n) {
    let str = '';
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === j) {
                str += ' 1 ';
            } else {
                str += ' 0 ';
            }
        }
        console.log(str);
        str = '';
    }
}

//#11 
function secondMaxAndMin(arr) {
    let sortedArr = arr.sort();
    let secondMin = sortedArr[1];
    let secondMax = sortedArr[arr.length - 2];
    console.log(secondMin + "," + secondMax);
}

//#12
function isPerfect(num) {
    let temp = 0;
    for (let i = 1; i < num; i++) {
        // get all the divisors and sum them up
        if (num % i === 0) {
            temp += i;
        }
    }
    if (temp === num) {
        return true;
    }
    else {
        return false;
    }
}

//#13
function factorsOfNum(num) {
    let result = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            result.push(i);
        }
    }
    console.log(result);
}

//#14
function coinChange(money, arr) {
    let remain = money;
    let i = 0;
    result = [];
    let num = 0;
    while (remain > 0 && i < arr.length) {
        num = 0;
        if (remain >= arr[i]) {
            num += arr[i];
            remain -= arr[i];
        }
        else {
            i++;
        }
        if (num != 0) {
            result.push(num);
        }
    }
    console.log(result);
}

//#15
function mathPower(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = result * base;
    }
    console.log(result);
}

//#16
function extractUnique(str) {
    var set = new Set();
    let result = "";
    for (let letter of str) {
        set.add(letter);
    }
    for (let each of set) {

        result = result + each;
    }
    console.log(result);
}

//#17
function countOccurrence(str) {
    freq = {};
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        if (!freq[element]) {
            freq[element] = 1
        }
        else {
            freq[element] += 1;
        }
    }
    console.log(freq);
}

//#18
// it returns the position of the element 
function binarySearch(arr, element) {
    let left = 0;
    let right = arr.length;
    while (left <= right) {

        let middle = Math.floor((left + right) / 2);
        //console.log(middle);
        if (arr[middle] === element) {
            return middle;
        }
        else if (element <= arr[middle]) {
            right--;
        }
        else {
            left++;
        }
    }
    console.log('element not found');
}

//#19
function largerThanElement(arr, num) {
    let result = [];
    for(each of arr){
        if (each > num){
            result.push(each);
        }
    }
    return result;
 }

//#20 
function generateStringID(length) {
    let password = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = [];
    while (length > 0) {
        let cur = password.charAt(Math.random() * password.length);
        code.push(cur);
        length--;
    }
    return code.join('');
}






