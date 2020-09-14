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