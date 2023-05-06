function solution(myString) {
    return myString.split("").map((v) => {
        if(v === v.toLowerCase())
            return v.toUpperCase();
        else
            return v;
    }).join("");
}