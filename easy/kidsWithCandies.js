/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    let greatest = 0;
    let list = []
    for (let i = 0; i < candies.length; i++){
        if (candies[i]>greatest){
            greatest = candies[i]
        }
    }
    for (let i = 0; i < candies.length; i++){
        if (candies[i]+extraCandies >= greatest){
            list.push(true)
        }else {
            list.push(false)
        }
    }
    return list
};
console.log(kidsWithCandies([2,3,5,1,3], 3) )