console.log("Leap years between 1900 and 2025:");

for (let currentYear = 1900; currentYear <= 2025; currentYear++) {
    let isLeapYear = false;
    
    if (currentYear % 4 === 0) {
        if (currentYear % 100 === 0) {
            if (currentYear % 400 === 0) {
                isLeapYear = true;
}
}       else {
            isLeapYear = true;
}
}

    if (isLeapYear) {
        console.log(currentYear);
    }
}
