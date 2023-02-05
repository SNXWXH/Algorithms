function solution(n) {
  let a = 0;
  for (let i = 1; i <= n; i++) {
    a += 1;
    while (a % 3 === 0 || a.toString().includes(3)) a += 1;
  }
  return a;
}
