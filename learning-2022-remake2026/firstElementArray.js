function findElementArray(m, n) {
    if (!Array.isArray(m) || m.length === 0) {
        return [];
    }
    if (n === null || n === undefined) {
        return m[0];
    }
    if (n > 0) {
        return m.slice(0, n);
    }
    return [];
}

console.log(findElementArray([1, 2, 3, 5, 3], 2));      // [1, 2]
console.log(findElementArray([]));                      // []
console.log(findElementArray([1, 2, 3, 5, 3], 10));     // [1, 2, 3, 5, 3]
console.log(findElementArray([[], 1, 2, 3, 5, 3], 2));  // [[], 1]
console.log(findElementArray([[1, 2], 1, 2, 3, 5, 3], 2)); // [[1, 2], 1]
console.log(findElementArray([1, 2, 3], -2));           // []