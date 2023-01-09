function solution(n) {
  let array = [];

  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      array.push(i);
      n /= i;
      console.log(n);
    }
  }

  if (n >= 2) array.push(n);
  array = new Set(array);
  return Array.from(array);
}
