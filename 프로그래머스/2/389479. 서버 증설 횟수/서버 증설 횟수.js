const solution = (players, m, k) => {
    let player = [0,...players];
    let result = 0;
    let runningServer = 0;
    let queueTime = [];
    
    for(let i = 1; i < 25; i++){
        // 반납되는 서버 계산
        queueTime = queueTime.filter((v) => i!==v);
        runningServer -= runningServer - queueTime.length;

        if(player[i] >= m && Math.floor(player[i]/m) > runningServer){
            const nowRunServer = Math.floor(player[i]/m) - runningServer;
            runningServer += nowRunServer;
            result += nowRunServer;
            for(let j = 0; j < nowRunServer; j++){
                queueTime.push(i+k);
            }
        }
    }
    return result
}