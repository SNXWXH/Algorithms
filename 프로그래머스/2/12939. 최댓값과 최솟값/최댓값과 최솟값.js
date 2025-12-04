function solution(s) {
    let string = s.split(" ").map(Number)
    const min = Math.min(...string)
    const max = Math.max(...string)

    return (`${min} ${max}`)
}