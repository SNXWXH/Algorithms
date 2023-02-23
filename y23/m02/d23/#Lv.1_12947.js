function solution(x) {
  let sum = 0;
  let arr = x.toString().split("");
  for (let e of arr) sum += Number(e);
  return x % sum === 0 ? true : false;
}
