function solution(my_string, index_list) {
    let st = "";
    let arr = my_string.split("");
    index_list.map((v) => st+= arr[v]);
    return st;
}