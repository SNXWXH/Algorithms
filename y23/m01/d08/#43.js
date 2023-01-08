function solution(n) {
  let max = 10;
  let fac = 1;
  for (let i = 1; i <= max; i++) {
    fac *= i;
    if (fac === n) return i;
    if (fac > n) return i - 1;
  }
}
