/*
    29. Write a JavaScript function to get the function name.
*/

function getName(func) {
    return func.name;
}

const helloFuc = () => {
    return hello;
}

console.log(getName(helloFuc));