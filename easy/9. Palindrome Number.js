/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const splitted = x.toString().split("");
    const revered = [...splitted].reverse();
    const normSplitted = splitted.join("");
    const normReversed = revered.join("");
    console.log(normSplitted)
    console.log(normReversed)
    return normSplitted === normReversed;
};


console.log((isPalindrome(121)))