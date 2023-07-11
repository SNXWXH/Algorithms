function solution(myString, pat) {
    let letter = myString.lastIndexOf(pat);
    return myString.slice(0, letter + pat.length);
}