function solution(n) {
  let answer = 0;
  let arr = n.toString().split("");
  arr.map((e) => (answer += Number(e)));
  return answer;
}

// function solution(n) {
//   return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
// }
