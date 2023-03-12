function solution(price, money, count) {
  let arr = [];
  let charge = 0;
  for (let i = 1; i <= count; i++) arr.push(price * i);
  charge = arr.reduce((arr, cur) => (arr += cur), 0) - money;
  return Math.sign(charge) === 1 ? charge : 0;
}
