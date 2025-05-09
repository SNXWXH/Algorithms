function solution(s) {
    let str = s.split(/[\{\},]+/).filter((v) => v !== '')
    let obj = {};
    let ans = []
    
    str.forEach((v) => {
        if(!obj[v]) obj[v] = 1
        else obj[v]++
    })
    
    const sortedObj = Object.entries(obj).sort((a, b) => b[1] - a[1])
    return sortedObj.map((v) => Number(v[0]))
    
    // const sortedObj = new Map(Object.entries(obj).sort((a, b) => b[1] - a[1]))
    // return Object.keys(sortedObj)
}