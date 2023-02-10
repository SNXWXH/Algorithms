function solution(num, total) {
  let arr = [];
  let a = (num * (num + 1)) / 2;
  let start = (total - a) / num + 1;

  for (let i = 0; i < num; i++) {
    arr.push(start + i);
  }

  return arr;
}
