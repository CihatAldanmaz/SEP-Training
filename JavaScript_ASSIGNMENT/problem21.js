/*
    21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
    combinations in an array. 
    Sample array : [1, 2, 3] and subset length is 2 
    Expected output : [[2, 1], [3, 1], [3, 2]
*/

var subsets = function(nums, n) {
    var result = [];
    if(!nums.length) {
        return result;
    }
    var nums = nums.sort((a,b) => a-b);
    dfs(nums, 0, [], result);
    return result.filter(subset => subset.length === n);
};

function dfs(nums, index, combination, result) {
    result.push(combination);
    for(var i = index; i < nums.length; i++) {
        combination.push(nums[i]);
        dfs(nums, i + 1, combination.slice(0, combination.length), result)
        combination.pop()
    }
}

console.log(subsets([1, 2, 3], 2));