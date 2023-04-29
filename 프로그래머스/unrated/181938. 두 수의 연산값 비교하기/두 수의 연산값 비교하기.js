function solution(a, b) {
    let first = String(a) + String(b);
    let second = 2 * a * b;
    return Math.max(first, second);
}