/*
    Write a JavaScript function which will take an array of numbers stored and find the secondlowest and 
    second greatest numbers, respectively. 
    Sample array : [1,2,3,4,5]
    Expected Output : 2,4
*/

function secondLowestAndGreatest(nums) {
    let minVal = Math.min(...nums);
    let secondMin = Number.MAX_VALUE;
    let maxVal = Math.max(...nums);
    let secondMax = Number.MIN_VALUE;

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] < maxVal && nums[i] > secondMax) {
            secondMax = nums[i];
        }
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > minVal && nums[i] < secondMin) {
            secondMin = nums[i];
        }
    }

    return [secondMin, secondMax];
}

console.log(secondLowestAndGreatest([1, 2, 3, 4, 5]));