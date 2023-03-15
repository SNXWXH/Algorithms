function solution(s) {
  let answer = [];
  let arr = [];
  [...s].forEach((e) => {
    if (!arr.includes(e)) answer.push(-1);
    if (arr.includes(e)) answer.push(arr.length - arr.lastIndexOf(e));
    arr.push(e);
  });
  return answer;
}
