/*
 19. Write a JavaScript function that returns array elements larger than a number. 
*/

function largerNumbers(array, val) {
    return array.filter((num) => {
        return num > val;
    })
}


console.log(largerNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));