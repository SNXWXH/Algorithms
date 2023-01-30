function solution(n, t) {
  let ans = n;
  for (let i = 1; i <= t; i++) ans *= 2;
  return ans;
}
