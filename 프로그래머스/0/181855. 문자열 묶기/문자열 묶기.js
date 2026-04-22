function solution(strArr) {
    let ans = 0;
    let obj = {}
    
    strArr.forEach((str) => {
        if(!obj[str.length]) obj[str.length] = []
        obj[str.length].push(str)
    })
    
    for(let i in obj){
        if(ans < obj[i].length) ans = obj[i].length
    }
    
    return ans
}