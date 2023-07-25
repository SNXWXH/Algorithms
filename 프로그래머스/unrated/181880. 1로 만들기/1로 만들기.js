function solution(num_list) {
    let cnt = 0;
    num_list.map((v) => {
        while(v != 1){
            if(v % 2 === 0)
                v = v / 2
            else
                v = (v - 1) / 2
            cnt++
        }
    })
    return cnt;
}