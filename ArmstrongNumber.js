const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "));
let originalNumber = inputNumber;

let digitCount = 0;
let calculatedSum = 0;


let count = inputNumber;
while (count > 0) {
    count = Math.floor(count / 10);
    digitCount++;
}


let workingNumber = inputNumber;
while (workingNumber > 0) {
    let lastDigit = workingNumber % 10;


    let digitPower = 1;
    for (let index = 0; index < digitCount; index++) {
        digitPower *= lastDigit;
    }

    calculatedSum += digitPower;
    workingNumber = Math.floor(workingNumber / 10);
}


if (calculatedSum === originalNumber) {
    console.log(originalNumber + " is Armstrong");
} else {
    console.log(originalNumber + " is not an Armstrong number");
}

