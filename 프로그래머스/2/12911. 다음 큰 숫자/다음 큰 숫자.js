function solution(n) {
    let ans = n;
    let flag = true
    
    while(flag){
        ans +=1;
        if(ans > n){
            const N_2BYTE = n.toString(2)
            const ANS_2BYTE = ans.toString(2)
            
            const N_NUM = [...N_2BYTE].filter((v) => +v === 1)
            const ANS_NUM = [...ANS_2BYTE].filter((v) => +v === 1)
            
            if(N_NUM.length === ANS_NUM.length) flag = false
        }
    }
    
    return ans
}