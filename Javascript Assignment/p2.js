//for checking only alphanumeric character, case-insensitive in the string
function palidrome(input){
    let left = 0, right = input.length-1;
    //let regex = /[a-zA-Z0-9]/;
    //i means case-insensitive
    let regex = /[a-z0-9]/i;
    while(left < right){
        while(!regex.test(input[left]) && left < input.length) left++;
        while(!regex.test(input[right]) && right >= 0) right--;
        //typeof(input[0]) === string
        //toLowerString() is a String method in Javascript
        if(input[left].toLowerCase() !== input[right].toLowerCase()) return false;
        left++; right--;
    }
    return true;
}



const test1 = "abcba";
console.log(palidrome(test1));

const test2 = "abccba";
console.log(palidrome(test2));

const test3 = "abcdba";
console.log(palidrome(test3));

const test4 = "a, b : cb a";
console.log(palidrome(test4));

const test5 = "A, b : cB a";
console.log(palidrome(test5));