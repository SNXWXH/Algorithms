function solution(num_list, n) {
    let st = [];
    for(let i = n-1; i < num_list.length; i++)
        st.push(num_list[i]);
    return st
}