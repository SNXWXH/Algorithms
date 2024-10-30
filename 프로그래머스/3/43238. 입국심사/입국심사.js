const solution = (n, times) => {
    let sorted = times.sort((a, b) => a - b);
    let left = 0; 
    let right = n * times[times.length-1]; 

    while(left <= right){
        let cntPeople = 0;
        let mid = Math.floor((left+ right) /2);
        for(let i=0; i<times.length; i++){
            cntPeople += Math.floor(mid / sorted[i])
        }
 
        if(n <= cntPeople) right  = mid -1; 
        else if(cntPeople < n) left = mid +1; 
    }
    return left;
}