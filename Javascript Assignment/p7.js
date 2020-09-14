function count_vowel(input){
    let count = 0;
    const regex = /(a|e|i|o|u)/i;
    for(let i = 0; i < input.length; i++){
        if(regex.test(input[i])) count++;
    }
    return count;
}

const test1 = 'The quick brown fox';
console.log(count_vowel(test1));

const test2 = 'Write a JavaScrip';
console.log(count_vowel(test2));
