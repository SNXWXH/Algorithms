const solution = (schedules, timelogs, startday) => {
    let day = ['', [6,7], [5,6], [4,5], [3,4], [2,3], [1,2], [1,7]];
    let ans = 0;
    
    timelogs.map((arr,idx) => {
        let time = timeCal(+schedules[idx]);
        let check = 0;
        arr.map((v,i) => {
            if(+arr[i] <= time && !day[startday].includes(i+1)) 
                check++;
        })
        if(check === arr.length-2) ans++;
    })
    
    return ans;
}

const timeCal = (time) => {
    let hour = Math.floor(time / 100);
    let min = time % 100 + 10;
    
    if(min >= 60){
        hour += Math.floor(min / 60);
        min = min % 60;
    }
    
    return hour*100 + min
}