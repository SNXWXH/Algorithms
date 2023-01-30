function solution(n) {
  let num = Math.sqrt(n);
  return num % 1 === 0 ? 1 : 2;
}

// function solution(n) {
//   return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
// }
