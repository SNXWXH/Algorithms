function solution(arr, k) {
    let ans = [];
    if(k % 2 === 0){
        arr.map((v) => {
            ans.push(v + k);
        });
    }
    else{
        arr.map((v) => {
            ans.push(v * k);
        });
    }
    return ans;
}