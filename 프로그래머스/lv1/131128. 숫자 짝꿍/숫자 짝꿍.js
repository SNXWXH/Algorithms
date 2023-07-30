function solution(X, Y) {
    let ans = "";
    let common = [];
    let commonX = new Array(10).fill(0);
    let commonY = new Array(10).fill(0);
    
    X = X.split("").map((v)=> commonX[v]++);
    Y = Y.split("").map((v)=> commonY[v]++);
    
    for(let i = 9; i >= 0; i--){
        if(commonX[i] !=0 && commonY[i]!=0){
            let min = Math.min(commonX[i],commonY[i])
            common.push([i, min]);
        }
    }
    if(common.length === 0) return "-1"

    common.map((v) => ans+=v[0].toString().repeat(v[1]))

    return ans[0][0] === "0" ? "0" : ans;
}