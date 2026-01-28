function findTheLargestNumber() {
    const numbers = [];
    for (let i = 0; i < 5; i++) {
        const num = parseFloat(prompt(`Enter number ${i + 1}:`));
        if (!isNaN(num)) {
            numbers.push(num);
        }
    }
    
    if (numbers.length === 0) {
        alert("No valid numbers entered");
        return null;
    }
    
    const largest = Math.max(...numbers);
    alert(`The largest number is: ${largest}`);
    return largest;
}

findTheLargestNumber();
