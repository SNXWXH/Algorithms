function solution(a, b) {
    let first = String(a) + String(b);
    let second = String(b) + String(a);
    return Math.max(first, second);
}