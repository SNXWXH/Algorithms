function solution(q, r, code) {
    let str = ''
    
    for(let i = 0; i < code.length; i++){
        if(i % q === r) str += code[i]
    }
    return str
}