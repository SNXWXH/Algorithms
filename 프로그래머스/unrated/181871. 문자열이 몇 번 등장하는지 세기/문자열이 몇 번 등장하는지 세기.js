function solution(myString, pat) {
    let ans = 0;
    for(let i = 0; i < myString.length; i++){
        let st = myString.slice(i,i+pat.length);
        if(pat === st) ans++;
    }
    return ans;
}