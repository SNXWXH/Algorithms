function solution(arr, divisor) {
  let result = [];
  for (let e of arr) {
    if (e % divisor === 0) result.push(e);
  }
  if (result.length === 0) result.push(-1);
  return result.sort((a, b) => a - b);
}
