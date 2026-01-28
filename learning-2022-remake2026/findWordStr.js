function findWordStr(text, word) {
    if (typeof text !== 'string' || typeof word !== 'string') {
        return -1;
    }
    const position = text.search(word);
    if (position !== -1) {
        console.log(`Word "${word}" found at position: ${position}`);
    } else {
        console.log(`Word "${word}" not found`);
    }
    return position;
}

// Примери
const text = "Hello World, this is a test string";
console.log(findWordStr(text, "test"));    // 20
console.log(findWordStr(text, "World"));   // 6
console.log(findWordStr(text, "xyz"));     // -1