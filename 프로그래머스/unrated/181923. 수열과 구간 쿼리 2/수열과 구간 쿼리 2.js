function solution(arr, queries) {
    let ans = [];
    let num = [];
    queries.map((v) => {
        for(let i = v[0]; i <= v[1]; i++){
            if(arr[i] > v[2]){
                num.push(arr[i]);
            }
        }
        num.length != 0 ? ans.push(Math.min(...num)) : ans.push(-1);
        num = [];
    })
    return ans;
}