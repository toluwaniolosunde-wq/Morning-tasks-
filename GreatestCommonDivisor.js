const prompt = require('prompt-sync')();

let DigitOne = prompt("Enter the first number: ");
let DigitTwo = prompt("Enter the second number: ");

while (DigitTwo !== 0) {
    let count = DigitTwo;
    DigitTwo = DigitOne % DigitTwo;
    DigitOne = count;

}
console.log("GCD is: " + DigitOne);
