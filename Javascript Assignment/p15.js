function power_of(b, n){
    let res = 1;
    for(let i = 0; i < n; i++){
        res *= b;
    }
    return res;
}

console.log(power_of(2, 3));
console.log(power_of(3, 4));
console.log(power_of(4, 5));