function oddOrEven() {
    for (let i = 0; i <= 15; i++) {
        const isOdd = i % 2 !== 0;
        const result = i === 0 ? "0" : isOdd ? `${i} is odd` : `${i} is even`;
        console.log(result);
    }
}

oddOrEven();