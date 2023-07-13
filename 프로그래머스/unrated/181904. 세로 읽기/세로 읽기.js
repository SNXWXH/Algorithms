function solution(my_string, m, c) {
    let arr = [];
    if(m === 1)
        return my_string;
    else{
        for(let i = 0 ; i < my_string.length; i+=m){
            arr.push(my_string.slice(i, i+m));
        }
        return arr.map((v) => v[c-1]).join("");
    }
}