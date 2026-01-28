function arrayCheck(value) {
    return Array.isArray(value);
}

console.log(arrayCheck(1, 2, 3, 4, 5));    // false
console.log(arrayCheck([1, 2, 3]));        // true