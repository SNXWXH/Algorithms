const solution = (progresses, speeds) => {
    let remain = []
    let cnt = 1;
    let ans = []
    
    for(let i = 0; i < progresses.length; i++){
        let lastPer = 100 - progresses[i];
        remain.push(Math.ceil(lastPer/speeds[i]));
    }
    
    let standard = remain[0];
    
    for(let i = 1; i < remain.length; i++){
        if(standard >= remain[i]){
            cnt++;
            if(i === remain.length-1) ans.push(cnt);
        }
        else{
            ans.push(cnt);
            cnt = 1;
            standard = remain[i];
            if(i === remain.length-1) ans.push(cnt);
        }
    }
    return ans;
}