function solution(n_str) {
    let arr = n_str.split("");
    for(let i of n_str){
        if(i === "0"){
            arr.shift();
        }
        else
            return arr.join("");
    }
}