function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    let num = [];
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) num.push(j, i / j);
    }
    num = [...new Set(num)];
    num.length % 2 === 0 ? (result += i) : (result -= i);
  }
  return result;
}
