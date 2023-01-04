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

// function solution(hp) {
//     const 장군개미 = Math.floor(hp / 5);
//     const 병정개미 = Math.floor((hp - (장군개미 * 5)) / 3);
//     const 일개미 = hp - ((장군개미 * 5) + (병정개미 * 3));
//     return 장군개미+병정개미+일개미;
// }
