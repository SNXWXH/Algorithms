function solution(arr) {
  var answer = [];
  let array = [];
  for (let e of arr) {
    if (array[array.length - 1] !== e) {
      answer.push(e);
      arrayå.push(e);
    }
  }
  return answer;
}
