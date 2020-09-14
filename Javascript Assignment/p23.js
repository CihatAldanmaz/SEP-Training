function first_unqiue(input){
    const counts = new Array(26).fill(0);
    let a_code = 'a'.charCodeAt(0);
    for(let i = 0; i < input.length; i++){
        let curr_code = input.charCodeAt(i);
        if(counts[curr_code - a_code] === 0) counts[curr_code - a_code]++;
        else counts[curr_code - a_code]--;
    }
    for(let i = 0; i < counts.length; i++){
        if(counts[i] === 1) return String.fromCharCode(a_code + i);
    }
    return -1;
}

const test1 = 'abacddbec';
console.log(first_unqiue(test1));

const test2 = 'abcba';
console.log(first_unqiue(test2));