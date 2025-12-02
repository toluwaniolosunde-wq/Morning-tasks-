const prompt = require('prompt-sync')();

let Digit = Number(prompt("Enter the first number: "));

let sum = 0;

for (let count = 1; count <= Digit / 2; count++) {
    if (Digit % count === 0) {
        sum += count;
    }
}

if (sum === Digit) {
    console.log(Digit + " is a perfect number");
} else {
    console.log(Digit + " is not a perfect number");
}


