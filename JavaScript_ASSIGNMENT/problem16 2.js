/*
    16. Write a JavaScript function to extract unique characters from a string. 
    Example string : "thequickbrownfoxjumpsoverthelazydog"
    Expected Output : "thequickbrownfxjmpsvlazydg"
*/

function extractUnique(s) {
    let uniqueStr = "";
    for(let char of s) {
        if(uniqueStr.indexOf(char) === -1) {
            uniqueStr += char;
        }
    }
    return uniqueStr;
}

console.log(extractUnique("thequickbrownfoxjumpsoverthelazydog"));