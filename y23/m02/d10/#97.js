function solution(A, B) {
  if (A === B) return 0;
  let arr = [...A];
  for (let i = 1; i < arr.length; i++) {
    arr.unshift(arr.pop());
    if (arr.join("") === B) return i;
  }
  return -1;
}

let solution = (a, b) => (b + b).indexOf(a);
