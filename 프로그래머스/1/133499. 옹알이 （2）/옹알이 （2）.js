const solution = (babbling) => {
    const canSay = ['aya','ye','woo','ma'];
    let cnt = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < canSay.length; j++){
            if(babble.includes(canSay[j].repeat(2))) break;
            
            babble = babble.split(canSay[j]).join(" ");
        }
        
        if(babble.split(" ").join("").length === 0) cnt += 1;
    }
    
    return cnt;
}