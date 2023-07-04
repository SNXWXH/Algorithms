function solution(arr, intervals) {
    let ans = [];
    for(let i = intervals[0][0]; i <= intervals[0][1]; i++)
        ans.push(arr[i]);
    for(let j = intervals[1][0]; j <= intervals[1][1]; j++)
        ans.push(arr[j]);
    return ans;
}