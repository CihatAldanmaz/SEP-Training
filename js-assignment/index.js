// 1. Reverse a number.
reverseNum = (num) => {
    let i = num, reverse = 0;

    while (i > 0) {
        reverse = (reverse * 10) + (i % 10);
        i = Math.floor(i / 10);
    }

    return reverse;
}
// console.log(reverseNum(32243));

// 2. Check if string is palindrome or not.
isPalindrome = (str) => {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    return (reverse === str);
}
// console.log(isPalindrome("madam"));

// 4. Sort letters in string alphabetically.
sortLetters = (str) => str.split("").sort().join("");
// console.log(sortLetters("webmaster"));

// 5. Convert first letter of each word in a string to upper case.
convertFirstLetterUpper = (str) => str.split(" ")
                                    .map(word => word[0].toUpperCase() + word.slice(1))
                                    .join(" ");
// console.log(convertFirstLetterUpper("the quick brown fox"));

// 6. Find longest word in string.
findLongestWord = (str) => {
    let words = str.split(" ")
    let longestWord = words[0], maxLength = 0;

    for (word of words) {
        if (word.length > maxLength) {
            longestWord = word;
            maxLength = word.length;
        }
    }

    return longestWord;
}
// console.log(findLongestWord("Web Development Tutorial"));

// 7. Count vowels in string.
countVowels = (str) => {
    let vowelCount = 0;

    for (let i = 0; i < str.length; i++) {
        vowelCount += (/[aeiouAEIOU]/.test(str[i])) ? 1 : 0;
    }

    return vowelCount;
}
// console.log(countVowels("The quick brown fox"));

// 8. Check if number is prime or not.
isPrime = (num) => {
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}
// console.log(isPrime(103));

// 9. Return type of argument.
returnType = (arg) => typeof(arg);
// console.log(returnType(false));

// 10. Return n x n identity matrix.
getIdentityMatrix = (n) => {
    let matrixString = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrixString += (i === j) ? "1 " : "0 ";
        }
        matrixString += "\n";
    }

    return matrixString;
}
// console.log(getIdentityMatrix(5));

// 11. Find second lowest and second highest in array.
findSecondLowestHighest = (arr) => {
    let min = arr.reduce((a, b) => Math.min(a, b)), max = arr.reduce((a, b) => Math.max(a, b));
    let minSecond = Infinity, maxSecond = -Infinity;

    for (num of arr) {
        minSecond = (num < minSecond && num != min) ? num : minSecond;
        maxSecond = (num > maxSecond && num != max) ? num : maxSecond;
    }

    console.log(minSecond + ", " + maxSecond);
}
// findSecondLowestHighest([7,6,1,9,5]);

// 12. Check if number is perfect or not.
isPerfect = (num) => {
    let factorSum = 0;

    for(let i = 1; i < num; i++) {
        factorSum += (num % i === 0) ? i : 0;
    }

    return (factorSum === num);
}
// console.log(isPerfect(8128));

// 13. Compute factors of positive integer.
computeFactors = (num) => {
    let factorString = "1";

    for (let i = 2; i <= num; i++) {
        factorString += (num % i == 0) ? ", " + i : "";
    }

    console.log(factorString);
}
// computeFactors(48);

// 14. Convert amount to coins.
amountToCoins = (amount, coins) => {
    let ans = "";

    for (let i = 0; i < coins.length; i++) {
        while (Math.floor(amount / coins[i]) > 0) {
            ans += coins[i] + ", ";
            amount -= coins[i];
        }
    }
    
    return ans.slice(0, ans.length - 2);
}
// console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

// 15. Compute b^n.
computePow = (b, n) => Math.pow(b, n);
// console.log(computePow(3, 4));

// 16. Extract unique characters from string.
extractUnique = (str) => {
    let charCount = new Map();
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        charCount.set(str[i], 1);
    }

    for (key of charCount.keys()) {
        ans += key;
    }

    console.log(ans);
}
// extractUnique("thequickbrownfoxjumpsoverthelazydog");

// 17. Get number of occurrences of each letter in string.
getLetterCount = (str) => {
    let charCount = new Map();

    for (let i = 0; i < str.length; i++) {
        if (charCount.has(str[i])) {
            charCount.set(str[i], charCount.get(str[i]) + 1);
        } else {
            charCount.set(str[i], 1);
        }
    }

    return charCount;
}
// console.log(getLetterCount("thequickbrownfoxjumpsoverthelazydog"));

// 18. Perform binary search on array.
binarySearch = (arr, num) => {
    let start = 0, end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (num === arr[mid]) {
            return true;
        } else if (num > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return false;
}
// console.log(binarySearch([2,4,6,7,9], 5));

// 19. Get array elements larger than a number.
getLarger = (arr, num) => arr.filter(item => item > num);
// console.log(getLarger([2,5,7,3,8], 4));

// 22. Count occurrences of letter in string.
getLetterCountInString = (str, letter) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        count += (letter === str[i]) ? 1 : 0;
    }

    return count;
}
// console.log(getLetterCountInString("hello world", "o"));

// 24. Apply bubble sort (descending).
bubbleSort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log(arr);
}
// bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);

// 25. Get longest country name from list of country names.
getLongestCountryName = (countries) => {
    let longestCountry = "", maxLength = 0;

    for (country of countries) {
        if (country.length > maxLength) {
            maxLength = country.length;
            longestCountry = country;
        }
    }

    return longestCountry;
}
// console.log(getLongestCountryName(["Australia", "Germany", "United States of America"]));

// 29. Get function name.
getFunctionName = (func) => {
    console.log(func.name);
}
// getFunctionName(add = (a, b) => a + b);