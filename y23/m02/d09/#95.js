function solution(before, after) {
  const arrbe = before.split("").sort();
  const arraf = after.split("").sort();
  return JSON.stringify(arrbe) === JSON.stringify(arraf) ? 1 : 0;
}

// function solution(before, after) {
//   return before.split("").sort().join("") === after.split("").sort().join("")
//     ? 1
//     : 0;
// }
