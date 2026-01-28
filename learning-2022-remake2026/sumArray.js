function sumArray(b, c, d) {
    const array = [b, c, d];
    return array.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray(1, 3, 5));
console.log(sumArray(10, 10, 15));