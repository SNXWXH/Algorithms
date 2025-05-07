function solution(citations) {
    let sorted = citations.sort((a,b) => b-a)    
    let hIdx = []
    
    for(let i = 0; i < sorted.length; i++){
        let standard = sorted[i];
        let h_idx = 1;
        for(let j = 0; j < sorted.length; j++){
            if(standard<sorted[j]) h_idx++
        }
        hIdx.push(Math.min(standard, h_idx))
    }
    
    return hIdx.sort((a,b) => b-a)[0]
}