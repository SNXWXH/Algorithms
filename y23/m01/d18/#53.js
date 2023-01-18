function solution(array, n) {
  array.sort((a, b) => a - b);
  let arr = [];
  array.map((e) => arr.push(Math.abs(n - e)));

  let sort = [];
  sort = [...arr].sort((a, b) => a - b);

  return array[arr.indexOf(sort[0])];
}
