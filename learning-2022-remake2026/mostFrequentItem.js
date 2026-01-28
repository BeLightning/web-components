function mostFrequentItem(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    
    const frequency = {};
    let maxCount = 0;
    let mostFrequent = null;
    
    // count frequency of each item
    for (const item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequent = item;
        }
    }
    
    return `${mostFrequent}(${maxCount} times)`;
}

console.log(mostFrequentItem(['v', 'b', 'v', 'v', 'v', 'a', 'd']));    // v(4 times)
console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])); // a(4 times)
