function solution(num_list, n) {
    let ans = [];
    for(let i = n; i < num_list.length; i++)
        ans.push(num_list[i]);
    for(let j = 0; j < n; j++)
        ans.push(num_list[j]);
    return ans;
}