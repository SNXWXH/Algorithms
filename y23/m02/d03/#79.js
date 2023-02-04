function solution(numbers) {
  let max = numbers[0] * numbers[1];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let mul = numbers[i] * numbers[j];
      if (max < mul) max = mul;
      mul = 0;
    }
  }
  return max;
}
