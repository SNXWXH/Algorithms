function solution(num_list) {
    let even = "";
    let odd = "";
    num_list.forEach((v) => {
        if(v % 2 === 0)
            even += v;
        else
            odd += v;
    });
    return Number(even) + Number(odd);
}