const solution = (n, lost, reserve) => {
    let answer = 0;
    let stFill = new Array(n).fill(1);
    lost.map((v)=>stFill[v-1] = 0)
    reserve.map((v)=> stFill[v-1]++)
    
    for(let i = 0; i <= n; i++){
        if(stFill[i] === 2 && stFill[i-1] === 0){
            stFill[i-1] = 1;
            stFill[i] = 1;
        }
        if(stFill[i] === 2 && stFill[i+1] === 0){
            stFill[i+1] = 1;
            stFill[i] = 1;
        }
    }
    
    
    let ans = stFill.filter((v)=> v > 0)
    return ans.length
}