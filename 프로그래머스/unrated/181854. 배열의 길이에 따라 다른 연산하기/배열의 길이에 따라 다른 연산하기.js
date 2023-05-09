function solution(arr, n) {
    if(arr.length % 2 === 0){
        for(let i = 1; i < arr.length; i++){
            arr[i] += n;
            i++;
        }
    }
    else{
        for(let i = 0; i < arr.length; i++){
            arr[i] += n;
            i++;
        }
    }
    return arr;
}