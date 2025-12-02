const prompt = require('prompt-sync')();



let number = Number(prompt("Enter a number: "))

let result = 1;

for (let count =1; count <= number; count++){

    result *= count;
}
console.log('The factorial = ' + result);
