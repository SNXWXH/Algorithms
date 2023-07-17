function solution(str_list) {
    const i = str_list.findIndex(v => v === 'l' || v === 'r');

    if(i === -1)
        return [];
    else if(str_list[i] === 'l')
        return str_list.slice(0, i);    
    else
        return str_list.slice(i + 1);
}