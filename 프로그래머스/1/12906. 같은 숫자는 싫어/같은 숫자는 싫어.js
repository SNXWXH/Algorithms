const solution = (arr)=>{
    let answer = [];
    let array = [];
    for(let e of arr){
        if(array[array.length -1]!==e) {
            answer.push(e);
            array.push(e);
        }
    } 
    return answer;
}