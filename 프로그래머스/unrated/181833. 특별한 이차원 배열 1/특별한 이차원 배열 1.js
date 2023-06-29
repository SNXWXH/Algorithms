function solution(n) {
    let ans = Array.from(Array(n), () => Array(n).fill(null))
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i != j)
                ans[i][j] = 0;
            else
                ans[i][j] = 1;
        }
    }
    return ans;
}