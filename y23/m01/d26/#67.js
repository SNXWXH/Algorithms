function solution(n) {
  n = String(n);
  let num = (e) => Number(e);
  let arr = n.split("").map(num);
  let sum = 0;
  arr.forEach((e) => (sum += e));
  return sum;
}

// function solution(n) {
//   return n
//     .toString()
//     .split("")
//     .reduce((acc, cur) => acc + Number(cur), 0);
// }
