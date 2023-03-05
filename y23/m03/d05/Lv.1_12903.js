function solution(s) {
  let arr = s.split("");
  if (arr.length % 2 === 0) {
    let result = [];
    result.push(arr[arr.length / 2 - 1]);
    result.push(arr[arr.length / 2]);
    return result.join("");
  } else return arr[Math.floor(arr.length / 2)];
}
