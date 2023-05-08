function solution(arr) {
    let ans = [];
    for(let v of arr){
        for(let i = 0; i < v; i++)
            ans.push(v);
    }
    return ans;
}