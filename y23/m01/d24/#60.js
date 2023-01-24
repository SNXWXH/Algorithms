function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i, Math.floor(n / i));
  }
  arr = Array.from(new Set(arr));
  return arr.sort((a, b) => a - b);
}

// function solution(n) {
//   var answer = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) answer.push(i);
//   }

//   return answer;
// }
