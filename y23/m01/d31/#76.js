function solution(array, height) {
  let i = 0;
  array.forEach((e) => {
    if (e > height) i += 1;
  });
  return i;
}
