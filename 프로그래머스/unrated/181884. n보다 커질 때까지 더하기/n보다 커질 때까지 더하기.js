function solution(numbers, n) {
    let ans = 0;
    for(let i of numbers){
        ans += i;
        if(ans > n)
            return ans;
    };
}