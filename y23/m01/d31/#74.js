function solution(my_str, n) {
  let arr = [];
  let j = 0;
  let z = n;
  for (let i = 0; i < Math.ceil(my_str.length / n); i++) {
    arr.push(my_str.slice(j, z));
    j += n;
    z += n;
  }
  return arr;
}
