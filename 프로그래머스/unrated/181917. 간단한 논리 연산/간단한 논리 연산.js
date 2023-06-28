function solution(x1, x2, x3, x4) {
    let first, second, ans;
    
    first = x1 || x2;
    second = x3 || x4;
    
    return ans = first && second;
}