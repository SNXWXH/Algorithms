function solution(array, n) {
  let i = 0;
  array.forEach((e) => {
    if (e === n) i += 1;
  });
  return i;
}
