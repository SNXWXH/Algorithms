function solution(n) {
    let ans = [n];
    while(n !=1){
        if(n % 2 === 0)
            n = n / 2; 
        else
            n = 3 * n + 1;
       ans.push(n);
    }
    return ans;
}