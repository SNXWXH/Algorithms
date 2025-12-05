function solution(nums) {
    let numsObj = {};
    
    nums.forEach((num) => {
        !numsObj[num] ? numsObj[num] = 1 : numsObj[num]++
    })
    
    
    return Object.keys(numsObj).length <= nums.length / 2 
        ? Object.keys(numsObj).length
        : nums.length / 2
}