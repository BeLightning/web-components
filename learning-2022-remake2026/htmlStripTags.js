function htmlStripTags(str) {
    if (!str) return '';
    return str.toString().replace(/<[^>]*>/g, '');
}
const example = '<div>Hello <strong>World</strong>!</div>';
console.log(htmlStripTags(example)); // Output: Hello World!