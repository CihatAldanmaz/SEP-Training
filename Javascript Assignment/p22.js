function counts(input, char){
    let count = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i] === char) count++;
    }
    return count;
}

console.log(counts('microsoft.com', 'o'));
console.log(counts('aabaac', 'a'));