function solution(todo_list, finished) {
    let arr = [];
    finished.map((v,idx) => {
        if(v === false)
            arr.push(todo_list[idx]);
    });
    return arr;
}