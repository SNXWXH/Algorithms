function solution(arr) {
  let sum = 0;
  arr.map((e) => (sum += e));
  return sum / arr.length;
}
