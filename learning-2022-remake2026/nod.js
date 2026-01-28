const nod = (numberOne, numberTwo) => {
    return numberTwo === 0 ? numberOne : nod(numberTwo, numberOne % numberTwo);
};

// example usage
console.log(nod(4, 8));   // 4
console.log(nod(10, 20)); // 10
console.log(nod(5, 55));  // 5
console.log(nod(8, 12));  // 4