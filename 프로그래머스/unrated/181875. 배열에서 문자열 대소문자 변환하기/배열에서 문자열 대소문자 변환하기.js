function solution(strArr) {
    let ans = [];
    for(let i = 0; i < strArr.length; i++){
        if(i % 2 === 0)
            ans.push(strArr[i].split("").map((v) => v.toLowerCase()).join(""));
        else
            ans.push(strArr[i].split("").map((v) => v.toUpperCase()).join(""));
    }
    return ans;
}