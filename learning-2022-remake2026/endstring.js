function endstring(str, lastword) {
    if (typeof str !== 'string' || typeof lastword !== 'string') {
        return false;
    }
    return str.endsWith(lastword);
}

console.log(endstring('next word is a string', 'string'));  // true
console.log(endstring('hello world', 'world'));              // true
console.log(endstring('hello world', 'hello'));              // false