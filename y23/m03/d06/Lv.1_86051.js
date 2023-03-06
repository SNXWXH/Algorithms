function solution(numbers) {
  let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    if (numbers.includes(number[i])) {
      number.splice(i, 1);
      i--;
    }
  }
  number.forEach((e) => (result += e));
  return result;
}

function solution(numbers) {
  let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return number
    .filter((e) => !numbers.includes(e))
    .reduce((acc, cur) => acc + cur, 0);
}
