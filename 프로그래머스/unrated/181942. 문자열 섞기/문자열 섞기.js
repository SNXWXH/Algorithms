function solution(str1, str2) {
    const Str1 = str1.split("");
    const Str2 = str2.split("");
    let ans = "";
    for(let i = 0; i < str1.length; i++){
        ans += Str1[i] + Str2[i];
    }
    return ans;
}