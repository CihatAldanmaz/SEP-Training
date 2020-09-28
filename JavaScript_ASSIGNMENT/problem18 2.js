/*
    18. Write a function for searching JavaScript arrays with a binary search. 
    Note : A binary search searches by splitting an array into smaller and smaller chunks until it findsthe desired value.
*/

function binarySearch(arr, target) {
    let i = 0;
    let j = arr.length - 1;

    while(i <= j) {
        let mid = Math.floor((i + j)/2);
        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid] < target) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8], 6));
console.log(binarySearch([1,1,1,1,1,1,1,1], 6));