function solution(arr, queries) {
    let newArr = [...arr]
    
    queries.forEach((v) => {
        newArr = [...newArr].map((num, i) => {
            if(v[0] <= i && i <= v[1] && i % v[2] === 0)
                return num+=1
            else return num
        })
    })
    
    return newArr;
}