function solution(arr) {
    let beforeArr = [...arr];
    let cnt = 0;
    
    while (true) {
        const afterArr = beforeArr.map((v) => {
            if (v >= 50 && v % 2 === 0) return v / 2;
            if (v < 50 && v % 2 === 1) return v * 2 + 1;
            return v;
        });
        
        if (beforeArr.every((v, i) => v === afterArr[i])) 
            return cnt;
        
        beforeArr = afterArr;
        cnt++;
    }
}