/*
8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

function isPrime(num) {
    let divisor = 2

    while(num > divisor) {
        if(num % divisor === 0) {
            return false;
        }
        divisor++;
    }
    return true;
}

console.log(isPrime(21312398127));