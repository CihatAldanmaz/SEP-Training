/*
10. Write a JavaScript function which returns the n rows by n columns identity matrix.
*/

function getIdentityMatrix(n) {
    let matrix = [];
    let row = []
    for(let i = 0; i < n; i++) {
        row.push(0);
    }

    for(let i = 0; i < n; i++) {
        let currentRow = row.slice();
        currentRow[i] = 1;
        matrix.push(currentRow);
    }

    return matrix;
}

console.log(getIdentityMatrix(5));