function solution(n) {
  let arr = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      arr.push(n / i);
      arr.push(i);
    }
  }
  let set = new Set(arr);
  return [...set].reduce((a, b) => a + b, 0);
}
