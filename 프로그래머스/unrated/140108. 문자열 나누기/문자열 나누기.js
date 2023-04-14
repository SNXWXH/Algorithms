function solution(s) {
    let stack = [];
    let count = 0;
    s.split("").map((v) => {
        if(stack.length == 0){
            stack.push(v);
            count++;
        }
        else if(stack[stack.length -1] == v) stack.push(v);
        else stack.pop();
    })
    return count;
}