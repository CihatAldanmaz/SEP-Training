function greet_student(input, callback){
    return callback()+ ', ' + input;
}

function say_hi(){
    return "Hello";
}

console.log(greet_student('John', say_hi));
console.log(greet_student('Mary', say_hi));