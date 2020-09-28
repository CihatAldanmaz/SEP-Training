/*
    14. Write a JavaScript function to convert an amount to coins. 
    Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
    Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
    Output : 25, 10, 10, 1
*/

function amountToCoins(amount, coins) {
    let result = [];
    for(let i = 0; i < coins.length; i++) {
        if(amount >= coins[i]) {
            amount -= coins[i];
            result.push(coins[i]);
            i--;
        }
    }
    return result;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));