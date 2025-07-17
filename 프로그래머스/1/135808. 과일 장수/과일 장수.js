function solution(k, m, score) {
    let ans = 0;
    let sortScore = score.sort((a,b) => (b - a));
    
    for(let i = m; i <= sortScore.length; i = i + m){
        ans += sortScore[i - 1] * m;
    }
    
    return ans;
}