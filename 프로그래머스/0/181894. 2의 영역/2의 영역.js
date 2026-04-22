function solution(arr) {
    if(!arr.includes(2)) return [-1];
    let flag = false;
    
    let splitTwo = arr.join("*").split("2")
    console.log(splitTwo)
    splitTwo.shift()
    splitTwo.pop()
    
    let str = splitTwo.join("2").split("*")
    str[0] = '2';
    str[str.length-1] = '2'
    
    return str.map(Number)
    
}