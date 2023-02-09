function solution(i, j, k) {
  let arr = [];
  let answer = 0;
  for (let z = i; z <= j; z++) {
    arr.push(z.toString());
  }
  let number = arr.map((e) => e.split(""));
  number.forEach((e) => {
    e.forEach((a) => {
      if (Number(a) === k) answer += 1;
    });
  });
  return answer;
}

function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}
