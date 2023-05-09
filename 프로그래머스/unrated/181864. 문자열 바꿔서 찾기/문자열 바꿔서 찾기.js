function solution(myString, pat) {
    let arr = myString.split("").map((v) => {
        if(v === "A")
            return "B";
        else
            return "A";
    }).join("");
    return arr.includes(pat) ? 1 : 0;
}