function solution(score) {
  let sum = [];
  let ans = [];
  score.map((e) => sum.push(e[0] + e[1]));
  let sort = [...sum].sort((a, b) => b - a);
  for (let i = 0; i < sum.length; i++) ans.push(sort.indexOf(sum[i]) + 1);
  return ans;
}
