//April Zhou 09202020
//#1

/* const reverseNum = (num) => {
    num = num + ""; 
    return num.split("").reverse().join(""); 
} 
console.log(reverseNum(32243));  */

//#2
/* const isPalindrome = (s) => {
    let left = 0; 
    let right = s.length - 1;
    while (left < right){
        if (s[left] != s[right]) {
            return false;
        }
        left += 1;
        right -= 1; 
    }
    return true; 
}

console.log(isPalindrome("abaa")) */

//#3
/* const strCombine = (s) => {
    let ans = [];
    for (let i = 0; i < s.length; i++){
        let start = s[i];
        console.log(start);
        ans.push(start)
        for (let j = i + 1; j< s.length; j ++){
            start += s[j];
            ans.push(start);
        } 
    }
    return ans;

} 
console.log(strCombine('dog')); */

//#4 
/* const sortString = (s) => {
    //remove symbols
    s = s.replace(/[^a-zA-Z]/g, '');
    s = s.split(""); 
    s.sort();
    return s.join("");
}

console.log(sortString("webmaster")); */

//#5
/* const capFirst = (s) => {
    let arr = s.split(" ");
    arr.forEach((item, index) => {
        arr[index] = item.replace(item[0], item[0].toUpperCase());
    })
    return arr.join(" ");
}

console.log(capFirst('the quick brown fox')); */

//#6 
/* const Longest = (s) => {
    let maxLength = 0;
    let maxIndex;
    let arr = s.split(" ");
     arr.forEach((item, index) => {
        if (item.length > maxLength){
            maxLength = item.length;
            maxIndex = index;
        }
    }) 
    return arr[maxIndex];
}

console.log(Longest('Web Development Tutorial')); */

//#7 
/* const vowelCount = (s) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i=0; i < s.length; i++) {
        if (vowels.includes(s[i])){
            count += 1;
        }
    }
    return count; 
}
console.log(vowelCount('The quick brown fox')); */

//#8 
/* const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i ++){
        if (num % i === 0) {
            return false
        } 
    }
    return true;
}
console.log(isPrime(9)); */

//#9 
/* const ArgsTypes = (...args) => {
    let types = []; 
    args.forEach((item) => {
        types.push(typeof item);
    })
    return types;
}

console.log(ArgsTypes(1,2,3,'a', true, ()=>{})); */

//#10
/* const identityMatrix = (n) => {
    arr = []; 
    for (let i = 0; i < n; i++){
        row_arr = Array(n).fill(0);
        row_arr[i] = 1;
        arr.push(row_arr);
    }
    return arr;
}
console.log(identityMatrix(5)); */

//#11 
/* const second = (arr) => {
    return [arr[1], arr[arr.length - 2]];
}

console.log(second([1, 2, 3, 4, 5]));  */

//#12 
/* const isPerfect = (num) => {
    let divisors = [];
    let divisor_sum; 
    for (let i = 1; i <= Math.sqrt(num); i++){
        if (num % i === 0) {
            divisor = num / i;
            divisors.push(i);
            if (divisor !== i) {
                divisors.push(divisor); 
            }
        }
    }
    divisor_sum = divisors.reduce((a,b) => {return a+b});
    if (divisor_sum == 2 * num) {
        return true;
    }
    return false; 
}

console.log(isPerfect(6));
console.log(isPerfect(8128)); */

//#13 same solution as #12 

//#14 
const toCoin = (amt)=> {

}



//#15 ?? should we condider decimal exponent?
/* const expFunction = (base, exponent) => {
    let ans = base;
    if (exponent === 0) {
        return 1;
    }
    for (let i = 1; i < exponent; i ++){
        ans *= base;
    }
    return ans
}

console.log(expFunction(10, 0)); */

//#16
/* const uniqueChar = (s) => {
    let arr_set = new Set(s.split(""));
    return [...arr_set].join("");
}
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog")); */

//#17 
/* const letterFrequency = (s) => {
    let countMap = {}; 
    let s_arr = s.split("")
    s_arr.forEach(element => {
        if (Object.keys(countMap).includes(element)){
            countMap[element] += 1
        }
        else {
            countMap[element] = 1;
        }
        
    });
    return countMap; 
}
console.log(letterFrequency('aabca')); */

//#18 
/* const binarySearch = (arr, target) => {
    arr = arr.sort();
    let start = 0;
    let end = arr.length - 1;
    while (start + 1 < end){
        mid = Math.floor((start + end) / 2);
        if (arr[mid] < target) {
            start = mid 
        }
        else if (arr[mid] === target){
            end = mid;
        }
        else {
            end = mid; 
        }
    }
    if (arr[start] === target) {
        return start;
    }
    if (arr[end] === target){
        return end
    }
    return -1;
}
console.log(binarySearch([100,2,3,90,76,77,44], 76));
 */


//#19 
/* const biggerThan = (arr, num) => {
    
    let ans = arr.filter((item) => {
        return item > num;
    });
    return ans;
}

console.log(biggerThan([1,2,3,5], 4)); */

//20 
/* const randomId = (num) => {
    // num is the specified length of a string id; 
    pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    pool_length = pool.length; 
    ans = ''
    for (let i=0; i< num; i++){
        random_index = Math.floor(Math.random() * pool_length); 
        ans += pool[random_index];
    }
    return ans;
}

console.log(randomId(6)); */