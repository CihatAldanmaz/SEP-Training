function check_prime(input){
    if(input === 2) return true;
    if(input <= 1 || input%2 === 0) return false;
    for(let i = 3; i < input; i+=2){
        if(input%i === 0) return false;
    }
    return true;
    
}

console.log(check_prime(37));
console.log(check_prime(1));
console.log(check_prime(2));
console.log(check_prime(38));