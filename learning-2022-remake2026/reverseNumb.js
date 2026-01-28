function reverseNumb() {
    const number = prompt("Enter a number:", "");
    if (!number || isNaN(number)) {
        alert("Please enter a valid number");
        return null;
    }
    
    const reversed = parseInt(number.toString().split('').reverse().join(''));
    alert(`Original: ${number} | Reversed: ${reversed}`);
    return reversed;
}

console.log(reverseNumb());