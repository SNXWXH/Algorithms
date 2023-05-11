function solution(myString) {
    return myString.split("").map((v) => {
        if(v === "a" || v === "A")
            return "A";
        else
            return v.toLowerCase();
    }).join("");
}