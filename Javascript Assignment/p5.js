function firstword_capital(input){
    const str_arr = input.split(" ");
    for(let i = 0; i < str_arr.length; i++){
        //slice(), substr(), substring()
        //str_arr[i] = str_arr[i][0].toUpperCase() + str_arr[i].slice(1);
        
        console.log(str_arr[i].replace(str_arr[i][0], str_arr[i][0].toUpperCase()));
        str_arr[i] = str_arr[i].replace(str_arr[i][0], str_arr[i][0].toUpperCase());
    }
    return str_arr.join(" ");
}

const test1 = "the quick brown fox";
//console.log(test1.replace(test1[0], test1[0].toUpperCase()));
console.log(firstword_capital(test1));