function solution(str_list, ex) {
    let ans = '';
    str_list.map((v) => {
        if(!v.includes(ex))
            ans += v;
    });
    return ans;
}