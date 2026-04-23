function solution(arr, k) {
    const SET_ARR = [...new Set(arr)]
    
    if(SET_ARR.length === k) return SET_ARR;
    if(SET_ARR.length > k) 
        return SET_ARR.slice(0, k)
    if(SET_ARR.length < k){
        while(SET_ARR.length !== k){
            SET_ARR.push(-1)
        }
        return SET_ARR
    }
}