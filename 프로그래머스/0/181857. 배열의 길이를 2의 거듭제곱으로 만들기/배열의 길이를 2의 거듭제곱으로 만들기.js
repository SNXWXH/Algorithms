function solution(arr) {
    let len = 1;
    
    while (len < arr.length) {
        len *= 2;
    }
    
    while (arr.length < len) {
        arr.push(0);
    }
    
    return arr;
}