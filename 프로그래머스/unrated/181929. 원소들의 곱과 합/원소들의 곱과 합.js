function solution(num_list) {
    let plus = 0;
    let multi = 1;
    for(let i = 0; i < num_list.length; i++){
        plus += num_list[i];
        multi *= num_list[i];
    }
    return multi > plus**2 ? 0 : 1;
}