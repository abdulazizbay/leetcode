/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sumOfNums = 0;
    let sumOfDigits = 0;

    for (let num of nums) {
        sumOfNums += num;



        for (let digit of num.toString()) {
            sumOfDigits += Number(digit);
        }
    }

    return Math.abs(sumOfNums - sumOfDigits);
};


console.log(differenceOfSum([1,15,6,3]))