function solution(my_string, queries) {
    let ans = my_string;
    
    queries.forEach((v) => {
        let str = ans;
        const SLICE_STR = str.slice(v[0], v[1] + 1).split("").reverse().join("")
        ans = str.slice(0 , v[0]) + SLICE_STR + str.slice(v[1] + 1)
    })
    
    return ans
}