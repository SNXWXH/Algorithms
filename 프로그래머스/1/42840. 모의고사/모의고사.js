const solution = (answers) => {
    let ans = [];
    let ans1 = [1, 2, 3, 4, 5];
    let ans2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let ans3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let cnt = {cnt1:0, cnt2:0, cnt3:0};
    
    for(i = 0; i < answers.length; i++){
        if(answers[i] === ans1[i%5]) cnt.cnt1++;
        if(answers[i] === ans2[i%8]) cnt.cnt2++;
        if(answers[i] === ans3[i%10]) cnt.cnt3++;
    }
    
    let cntArr = [cnt.cnt1, cnt.cnt2, cnt.cnt3].sort((a, b) => b-a);
    let max = Math.max(...cntArr);

    ans = Object.keys(cnt).filter((key)=> cnt[key] === max);
    
    return ans.map((v) => parseInt(v.replace('cnt',"")))
    
}