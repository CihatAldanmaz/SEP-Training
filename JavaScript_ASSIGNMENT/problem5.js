/*
    5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case. 
    Example string : 'the quick brown fox' 
    Expected Output : 'The Quick Brown Fox '
*/

function capitalize(s) {
    const words = s.split(' ');
    const newWords = [];
    for(let word of words) {
        const newWord = word.charAt(0).toUpperCase() + word.slice(1);
        newWords.push(newWord);
    }
    return newWords.join(' ');
}

console.log(capitalize('the quick brown fox'));