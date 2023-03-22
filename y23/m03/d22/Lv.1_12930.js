function solution(s) {
  let arr = s.split(" ");
  let j = 0;
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].split("").map((e) => {
      (arr[i].indexOf(e, j) + 1) % 2 === 0
        ? (answer.push(e.toLowerCase()), j++)
        : (answer.push(e.toUpperCase()), j++);
    });
    if (i != arr.length - 1) answer.push(" ");
    j = 0;
  }
  return answer.join("");
}

function solution(s) {
  let arr = s.split(" ");
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    answer.push(
      arr[i]
        .split("")
        .map((e, i) => (!(i % 2) ? e.toUpperCase() : e.toLowerCase()))
        .join("")
    );
  }
  return answer.join(" ");
}
