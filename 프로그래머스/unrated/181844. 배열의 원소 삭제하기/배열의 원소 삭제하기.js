function solution(arr, delete_list) {
    let ans = [...arr];
    for(let i = 0; i < delete_list.length; i++){
        if(ans.includes(delete_list[i])){
            ans[ans.indexOf(delete_list[i])] = " ";
        }
    }
    return ans.filter((v) => v != " ");
}