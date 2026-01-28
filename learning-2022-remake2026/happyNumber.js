function happySqr(num) {
    const cycle = new Set();
    
    while (num !== 1 && !cycle.has(num)) {
        cycle.add(num);
        let sq = 0;
        
        while (num > 0) {
            const rem = num % 10;
            sq += Math.pow(rem, 2);
            num = Math.floor(num / 10);
        }
        
        num = sq;
    }
    
    return num === 1;
}

function happyNumber(count) {
    const happyNumbers = [];
    let num = 1;
    
    while (happyNumbers.length < count) {
        if (happySqr(num)) {
            happyNumbers.push(num);
        }
        num++;
    }
    
    console.log(`First ${count} happy numbers are: ${happyNumbers.join(' ')}`);
    return happyNumbers;
}

happyNumber(5);
// Expected: 1 7 10 13 19