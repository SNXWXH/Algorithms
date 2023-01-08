function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) arr.push(i);
    }
  }
  let array = new Set(arr);
  return array.size;
}
