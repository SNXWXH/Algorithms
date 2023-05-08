function solution(rny_string) {
    return rny_string.split("").map((v) => {
        if(v === "m")
            return "rn";
        else
            return v;
    }).join("");
}