/*
    6. Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string. 
    Example string : 'Web Development Tutorial' 
    Expected Output : 'Development'
*/

function longestWord(s) {
    let longestLength = Number.MIN_VALUE; 
    let longestString = '';
    let words = s.split(' ');

    for(let word of words) {
        if(word.length > longestLength) {
            longestLength = word.length;
            longestString = word;
        }
    }
    return longestString;
}

console.log(longestWord('Web Development Tutorial'));