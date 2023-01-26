function solution(num, k) {
  num = String(num);
  const number = (e) => Number(e);
  let arr = num.split("").map(number);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === k) return arr.indexOf(arr[i]) + 1;
  }
  return -1;
}
