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

// 13. Compute factors of positive integer.
computeFactors = (num) => {
    let factorString = "1";

    for (let i = 2; i <= num; i++) {
        factorString += (num % i == 0) ? ", " + i : "";
    }

    console.log(factorString);
}
// computeFactors(48);

// 15. Compute b^n.
computePow = (b, n) => Math.pow(b, n);
// console.log(computePow(3, 4));