const solution = (video_len, pos, op_start, op_end, commands) => {
    const videoTotalSec = parseTime(video_len);
    const opStartSec = parseTime(op_start);
    const opEndSec = parseTime(op_end);
    
    let currentSec = parseTime(pos);

    if (opStartSec <= currentSec && currentSec < opEndSec) currentSec = opEndSec;

    for (let command of commands) {
        if (command === 'prev') currentSec = Math.max(0, currentSec - 10);
        else if (command === 'next') currentSec = Math.min(videoTotalSec, currentSec + 10);
        if (opStartSec <= currentSec && currentSec < opEndSec) currentSec = opEndSec;
    }

    return formatTime(currentSec);
};

const parseTime = (time) => {
    const [min, sec] = time.split(':').map(Number);
    return min * 60 + sec;
};


const formatTime = (time) => {
    const min = Math.floor(time/60);
    const sec = time % 60;
    return `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
}

