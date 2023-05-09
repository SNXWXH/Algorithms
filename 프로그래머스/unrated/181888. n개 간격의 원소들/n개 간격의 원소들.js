function solution(num_list, n) {
    let arr = [];
    for(let i = 0; i < num_list.length; i++){
        arr.push(num_list[i]);
        i += n - 1;
    }
    return arr;
}