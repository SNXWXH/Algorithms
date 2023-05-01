function solution(a, d, included) {
    let arr = [];
    let ans = 0;
    for(let i = 1; i<= included.length; i++){
        arr.push(a);
        a += d;
    }
    for(let i = 0; i <= included.length; i++){
        if(included[i] === true)
            ans += arr[i];
    }
    return ans;
}