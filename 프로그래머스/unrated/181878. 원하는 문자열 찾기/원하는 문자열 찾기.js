function solution(myString, pat) {
    let pat1 = pat.split("").map((v) => {
        if(v === v.toUpperCase())
            return v.toLowerCase();
        else
            return v;
    }).join("");
    let st = myString.split("").map((v) => {
        if(v === v.toUpperCase())
            return v.toLowerCase();
        else
            return v;
    }).join("");
    return st.includes(pat1) ? 1 : 0;
}