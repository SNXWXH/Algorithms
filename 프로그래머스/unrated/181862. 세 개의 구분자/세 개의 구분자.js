function solution(myStr) {
    let arr = myStr.split(/[a,b,c]/g);
    let ans = arr.filter((v) => v != "");
    return ans.length === 0 ? ["EMPTY"] : ans;
}