/*
20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample character list:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/

// input: n is length of id, charList is character list
function generateId(n, charList) {
    let strId = '';
    for(let i = 0; i < n; i++) {
        strId += charList[Math.floor(Math.random() * charList.length)];
    }
    return strId;
}

console.log(generateId(10, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"));