function solution(arr, queries) {
    queries.forEach((v) => {
        let temp1 = arr[v[0]];
        let temp2 = arr[v[1]];
        arr[v[0]] = temp2;
        arr[v[1]] = temp1;
    });
    return arr;
}