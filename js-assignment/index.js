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