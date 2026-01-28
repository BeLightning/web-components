function largeNumber() {
    const n1 = parseFloat(prompt("first number: "));
    const n2 = parseFloat(prompt("second number: "));
    
    if (isNaN(n1) || isNaN(n2)) {
        return "Invalid input";
    }
    
    if ((n1 >= 40 && n1 <= 60) && (n2 >= 40 && n2 <= 60)) {
        const largest = Math.max(n1, n2);
        return `The largest number is ${largest}`;
    }
    
    return "Numbers must be between 40 and 60";
}

// console.log(largeNumber());