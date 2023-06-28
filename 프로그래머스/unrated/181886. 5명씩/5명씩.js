function solution(names) {
    let ans = [];
    for(let i = 0; i < names.length; i++){
        ans.push(names[i]);
        i += 4;
    }
    return ans;
}