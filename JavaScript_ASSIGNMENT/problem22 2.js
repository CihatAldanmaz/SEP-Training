/*
    22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
    will count the number of occurrences of the specified letter within the string.
    Sample arguments : 'microsoft.com', 'o' 
    Expected output : 3 
*/

function countChar(s, char) {
    let count = 0;
    for(let c of s) {
        if (c === char){
            count++
        }
    }
    return count;
}

console.log(countChar( 'microsoft.com', 'o'));
