function solution(order) {
  let sum = 0;
  let arr = String(order)
    .split("")
    .map((e) => Number(e));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3 || arr[i] === 6 || arr[i] === 9) sum += 1;
  }
  return sum;
}

// function solution(order) {
//   var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
//   return answer;
// }

//안풀어진 코드
// function solution(order) {
//   let sum = 0;
//   let arr = String(order)
//     .split("")
//     .map((e) => Number(e));
//   sum += arr.map((e) => (e === 3 || e === 6 || e === 9 ? 1 : 0));
//   console.log(sum);
//   return sum;
// }
