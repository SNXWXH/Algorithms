function solution(my_string, s, e) {
    let arr = [];
    arr.push(my_string.slice(0,s));
    arr.push(my_string.slice(e + 1, my_string.length));
    let rev = my_string.slice(s, e + 1).split("");
    return arr[0] + rev.reverse().join("") + arr[1];
}