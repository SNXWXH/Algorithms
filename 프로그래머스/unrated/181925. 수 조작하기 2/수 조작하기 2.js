function solution(numLog) {
    let ans = "";
    for(let i = 1; i < numLog.length; i++){
        if(numLog[i] - 1 === numLog[i-1])
            ans += "w";
        if(numLog[i] + 1 === numLog[i-1])
            ans += "s";
        if(numLog[i] - 10 === numLog[i-1])
            ans += "d";
        if(numLog[i] + 10 === numLog[i-1])
            ans += "a";
    }
    return ans;
}