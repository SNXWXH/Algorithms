function solution(arr) {
    const MaxNum = Math.max(arr.length, arr[0].length)
    
    while(arr.length !== MaxNum || arr[0].length !== MaxNum){
        if(arr.length === MaxNum){
            arr.forEach((v) => {
                v.push(...Array(MaxNum - v.length).fill(0));
            })
        }
        else if (arr[0].length === MaxNum){
            for(let i = 0; i < MaxNum - arr.length; i++){
                arr.push(Array(MaxNum).fill(0));
            }
        }
    }
    return arr
}