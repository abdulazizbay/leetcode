/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trimmed = s.trim();
    const words = trimmed.split(" ");
    const lastWord = words[words.length - 1];
    return lastWord.length;
};

console.log(lengthOfLastWord("Hello World"));
