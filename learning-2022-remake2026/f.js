const factorial = (n) => {
    return n < 2 ? 1 : factorial(n - 1) * n;
};

console.log(factorial(6));  // 720
