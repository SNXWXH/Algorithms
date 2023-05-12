function solution(my_strings, parts) {
    let st = "";
    for(let i = 0; i < parts.length; i++)
        st += my_strings[i].substring(parts[i][0], parts[i][1]+1);
    return st;
}