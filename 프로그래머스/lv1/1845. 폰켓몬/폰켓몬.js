function solution(nums) {
    let numbers=[];
    nums.forEach((e) => {
        if(!numbers.includes(e)) numbers.push(e);
    });
    if(nums.length/2 > numbers.length) return numbers.length;
    else return nums.length/2;
}