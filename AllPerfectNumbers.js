console.log("Perfect numbers btw 1 and 1000:");

for (let number = 1; number <= 1000; number++) {
    let sumOfDivisors = 0;
    for (let divisor = 1; divisor < number; divisor++) {
        if (number % divisor === 0) {
            sumOfDivisors += divisor;
}
}

    if (sumOfDivisors === number) {
        console.log(number);
}
}
