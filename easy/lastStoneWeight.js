/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length>1){
        stones.sort((a,b)=> b-a)
        if (stones[0] === stones[1]){
            stones.splice(0,2)
        }else {
            let dif =stones[0] - stones[1]
            stones.splice(0,2)
            stones.push(dif)
        }
    }
    return stones[0] || 0
};

console.log(lastStoneWeight([2,7,4,1,8,1]))