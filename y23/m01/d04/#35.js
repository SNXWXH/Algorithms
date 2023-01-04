function solution(rsp) {
  let game = { 2: 0, 0: 5, 5: 2 };
  return rsp
    .split("")
    .map((e) => game[e])
    .join("");
}

// function solution(rsp) {
//   let arr = {
//     2: 0,
//     0: 5,
//     5: 2,
//   };
//   var answer = [...rsp].map((v) => arr[v]).join("");
//   return answer;
// }
