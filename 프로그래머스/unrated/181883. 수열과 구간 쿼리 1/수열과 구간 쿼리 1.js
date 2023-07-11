function solution(arr, queries) {
    queries.map((v) => {
        for(let i = 0; i < arr.length; i++){
            if(v[0] <= i && v[1] >= i)
                arr[i] += 1;
        }
    });
    return arr;
}