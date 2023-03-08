const solution = (a, b) => a.reduce((acc, cur, i) => (acc += a[i] * b[i]), 0);

// function solution(a, b) {
//   let answer = 0;
//   for (let i = 0; i < a.length; i++) answer += a[i] * b[i];
//   return answer;
// }
