/*
    7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
    Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' asvowel here. 
    Example string : 'The quick brown fox' 
    Expected Output : 5
*/

function countVowels(s) {
    let count = 0;
    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i < s.length; i++) {
        if (vowelSet.has(s[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('The quick brown fox'))