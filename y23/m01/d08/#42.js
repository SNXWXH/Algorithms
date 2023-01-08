function solution(numbers) {
  let max = numbers.sort((a, b) => b - a);
  return max[0] * max[1];
}
