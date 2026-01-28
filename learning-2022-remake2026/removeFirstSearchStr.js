function removeFirstSearchStr(str, searchString) {
    if (typeof str !== 'string' || typeof searchString !== 'string') {
        return str;
    }
    
    const index = str.indexOf(searchString);
    if (index === -1) {
        return str;
    }
    
    return str.slice(0, index) + str.slice(index + searchString.length);
}

console.log(removeFirstSearchStr("The iss string - text - str", 'iss'));
// Output: "The  string - text - str"
