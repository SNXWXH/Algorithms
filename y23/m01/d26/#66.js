function solution(n, numlist) {
  let arr = [];
  numlist.forEach((e) => {
    if (e % n === 0) arr.push(e);
  });
  return arr;
}

// function solution(n, numlist) {
//   return numlist.filter((num) => num % n === 0);
// }
