function solution(n) {
  let z = Math.sqrt(n);
  return Number.isInteger(z) ? (z + 1) * (z + 1) : -1;
}
