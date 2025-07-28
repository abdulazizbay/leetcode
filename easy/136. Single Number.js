/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let singleNum = 0
    for(let i = 0; i<nums.length; i++){
        singleNum = nums[i] ^ singleNum
    }
    return singleNum
};

console.log(singleNumber([4,1,2,1,2]))