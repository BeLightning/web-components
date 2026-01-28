function swapEvent(n) {
    const str = n.toString();
    
    if (str.length % 2 !== 0) {
        return 0;
    }
    
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
        result += str[i + 1] + str[i];
    }
    
    return parseInt(result);
}
console.log(swapEvent(1234));
console.log(swapEvent(1234567));
console.log(swapEvent(123));
