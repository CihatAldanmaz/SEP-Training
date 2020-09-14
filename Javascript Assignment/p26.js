function longest_substring(input){
    const char_set = new Set();
    // array to record the left and right index of current longest substring
    const res = new Array(2).fill(0);
    let max_len = 0;
    let left = 0, right = 0;
    for(; right < input.length; right++){
        while(char_set.has(input[right])){
            char_set.delete(input[left]);
            left++;
        }
        char_set.add(input[right]);
        let curr_len = right - left +1;
        if(curr_len > max_len){
            res[0] = left; res[1] = right;
        }
        max_len = Math.max(max_len, curr_len);
    }
    return input.substr(res[0], res[1]);
}

const test1 = "abcdeahhhjhhhj";
console.log(longest_substring(test1));

const test2 = "abcdeahjklhjhhhj";
console.log(longest_substring(test2));