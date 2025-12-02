console.log("Armstrong numbers between 1 and 1000:");

for (let currentNumber = 1; currentNumber <= 1000; currentNumber++) {
let originalNumber = currentNumber;


let workingNumber = currentNumber;
let digitCount = 0;
while (workingNumber > 0) {
    digitCount++;
    workingNumber = Math.floor(workingNumber / 10);
}

let sumOfPowers = 0;
workingNumber = currentNumber;
while (workingNumber > 0) {
    let currentDigit = workingNumber % 10;
    let digitPower = 1;
    for (let powerCounter = 0; powerCounter < digitCount; powerCounter++) {
        digitPower = digitPower * currentDigit;
    }
    sumOfPowers += digitPower;
    workingNumber = Math.floor(workingNumber / 10);
}

if (sumOfPowers === originalNumber) {
    console.log(originalNumber);
}
}
