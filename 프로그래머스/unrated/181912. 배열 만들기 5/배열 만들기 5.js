function solution(intStrs, k, s, l) {
    let arr = intStrs.filter((v) => v.substr(s,l)>k);
    return arr.map((v) => Number(v.substr(s,l)));
}