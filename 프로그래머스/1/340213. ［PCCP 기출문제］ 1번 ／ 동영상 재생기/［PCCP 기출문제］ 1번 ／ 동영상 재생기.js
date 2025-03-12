const solution = (video_len, pos, op_start, op_end, commands) => {
    let [min,sec] = pos.split(':').map((v)=>Number(v));
    let [video_min,video_sec] = video_len.split(':').map((v)=>Number(v));
    let [end_min, end_sec] = op_end.split(":").map((v)=>Number(v));
    let [start_min, start_sec] = op_start.split(":").map((v)=>Number(v));
    
    
    console.log(min,sec)
    
    commands.forEach((v) => {
        if(start_min <= min && start_sec <= sec ||end_min >= min && end_sec >= sec) {
            min = end_min;
            sec = end_sec;
        }
        
        if(v === 'prev') {
            sec -= 10;
            console.log(v, sec)
        }
        if(v === 'next') {
            sec += 10;
            console.log(v, sec)}
    
        if(sec < 0){
            min = 0;
            sec = 0;
        }
        
        if(video_min <= min && video_sec < sec){
            min = end_min;
            sec = end_sec
        }
        
        if(sec >= 60){
            min += Math.floor(min / 60);
            sec = min % 60;
        }
    })
    if(min.length === 2) min = "0"+min.toString();
    if(sec.length === 2) sec = "0"+sec.toString();
    console.log(min,sec)
}