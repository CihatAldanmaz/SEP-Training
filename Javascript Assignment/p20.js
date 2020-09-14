function string_id(input){
    char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    res = "";
    for(let i = 0; i < input; i++){
        // Math.random() will generate a floating point between 0 to 1
        // console.log(Math.random());
        res += char_list[Math.floor(Math.random()* char_list.length)];
    }
    return res;
}

console.log(string_id(8));
console.log(string_id(10));