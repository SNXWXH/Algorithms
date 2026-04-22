function solution(arr) {
    if(!arr.includes(2)) return [-1];
    
    const from = arr.indexOf(2);
    const end = arr.lastIndexOf(2);

    return arr.slice(from, end+1);
    
}