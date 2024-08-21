const solution = (progresses, speeds) => {
    let canJob = []
    let cnt = 1;
    let ans = []
    
    for(let i = 0; i < progresses.length; i++){
        let lastPer = 100 - progresses[i];
        canJob.push(Math.ceil(lastPer/speeds[i]));
    }
    
    let standard = canJob[0];
    
    for(let i = 1; i < canJob.length; i++){
        if(standard >= canJob[i]){
            cnt++;
            if(i === canJob.length-1) ans.push(cnt);
        }
        else{
            ans.push(cnt);
            cnt = 1;
            standard = canJob[i];
            if(i === canJob.length-1) ans.push(cnt);
        }
    }
    return ans;
}