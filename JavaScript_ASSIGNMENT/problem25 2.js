/*
    25. Write a JavaScript function that accept a list of country names as input and returns the
    longest country name as output. 
    Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
    Expected output : "United States of America"
*/

function Longest_Country_Name(countries) {
    let result = '',
        longest = Number.MIN_VALUE;
    
    for(country of countries) {
        if(country.length > longest) {
            result = country;
            longest = country.length;
        }
    }
    return result;
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));