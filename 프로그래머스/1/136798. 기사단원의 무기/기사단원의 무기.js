function solution(number, limit, power) {
    let arr = []
    let ans = 0
    
    for(let i = 1; i <= number; i++){
        let idx = 1
        let num = 1
        
        while (idx <= i / 2) {
            if (i % idx === 0) num++
            idx++
        }
        arr.push(num)
    }

    arr.map((v) => v > limit ? ans += power : ans += v)
    return ans
}