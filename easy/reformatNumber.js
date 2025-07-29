var reformatNumber = function(number) {
    let cleanNumber = number.split("").filter(char => char !== '-' && char !== ' ').join("");
    let result = [];
    let i = 0;

    while (cleanNumber.length - i > 4) {
        result.push(cleanNumber.substring(i, i + 3));
        i += 3;
    }

    let remaining = cleanNumber.length - i;

    if (remaining === 4) {
        result.push(cleanNumber.substring(i, i + 2));
        result.push(cleanNumber.substring(i + 2, i + 4));
    } else {
        result.push(cleanNumber.substring(i));
    }

    return result.join("-");
};

console.log(reformatNumber("1-23-45 6"));
