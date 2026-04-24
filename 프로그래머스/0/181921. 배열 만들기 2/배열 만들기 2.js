function solution(l, r) {
    const NUM = []
    let ans = []
    
    for(let i = l; i <= r; i++){
        NUM.push(i)
    }
    
    NUM.forEach((v) => {
        if (String(v).split('').every(num => num === '0' || num === '5'))
            ans.push(v);
    })
    
    return ans.length === 0 ? [-1] : ans
}