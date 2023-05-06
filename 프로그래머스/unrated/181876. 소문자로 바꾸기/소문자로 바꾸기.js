function solution(myString) {
    return myString.split("").map((v) => {
        if(v === v.toUpperCase())
            return v.toLowerCase();
        else
            return v;
    }).join("");
}