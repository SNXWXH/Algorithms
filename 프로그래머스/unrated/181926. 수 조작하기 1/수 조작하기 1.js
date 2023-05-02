function solution(n, control) {
    control.split("").map((v) => {
        if(v === "w")
            n++;
        else if(v === "s")
            n--;
        else if(v === "d")
            n += 10;
        else
            n -= 10;
    })
    return n;
}