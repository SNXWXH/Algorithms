function solution(hp) {
  let sum = 0;
  let remain = 0;
  if (hp / 5 > 0) {
    sum += Math.floor(hp / 5);
    remain += Math.floor(hp % 5);
  }

  if (remain / 3 > 0) {
    sum += Math.floor(remain / 3);
    remain -= Math.floor(remain / 3) * 3;
  }

  if (remain / 1 > 0) {
    sum += Math.floor(remain / 1);
  }

  return sum;
}
