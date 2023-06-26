function solution(myString) {
    return myString.split("").map((v) =>{
        if(v < "l") return "l";
        else return v;
    }).join("");
}