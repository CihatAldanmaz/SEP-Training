function binary_search(input, target){
    let left = 0, right = input.length-1;
    while(left <= right){
        let mid = Math.floor(left + (right - left)/2);
        if(input[mid] == target) return mid;
        else if(input[mid] > target) right = mid-1;
        else left = mid + 1;
    }
    return -1;
}

const test1 = [1, 2, 3, 4, 5]
console.log(binary_search(test1, 4));

const test2 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(binary_search(test2, 1));
console.log(binary_search(test2, 8));