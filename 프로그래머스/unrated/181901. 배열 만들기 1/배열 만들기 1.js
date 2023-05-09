function solution(n, k) {
    let arr = [];
    let i = 1;
    while(k*i <= n){
        arr.push(k*i);
        i++;
    }
    return arr;
}