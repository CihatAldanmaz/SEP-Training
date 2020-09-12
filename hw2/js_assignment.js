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
      // get all the divisors
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




